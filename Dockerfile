FROM node:alpine

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY [ "index.js", "./"]

COPY dist/ ./dist/

CMD ["npm","start"]
