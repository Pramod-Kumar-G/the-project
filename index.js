const fs = require("fs/promises");
const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
let generatedTime = new Date().getTime();

app.use((_req, _res, next) => {
  const currentTime = new Date().getTime();
  if (currentTime - generatedTime > 1000 * 60 * 10) {
    downloadImage(process.env.IMAGE_URL, "/usr/src/app/files/image.jpg");
    generatedTime = currentTime;
  }
  next();
});
app.use(express.static(path.join(__dirname, "dist")));
app.use("/files", express.static(path.join(__dirname, "files")));

const downloadImage = async (url, path) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await fs.writeFile(path, buffer);
    console.log(`Image downloaded successfully to: ${path}`);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server started in port", PORT));
