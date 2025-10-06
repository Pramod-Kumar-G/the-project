import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("/todos").then((response) => setTodos(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title: e.target.title.value };
    axios.post("/todos", todo);
    setTodos(todos.concat(todo));
  };
  return (
    <div>
      <h1>Hello World</h1>
      <img src="/files/image.jpg" alt="the-picture" />
      <br />

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" maxLength="140" />
        <button type="submit">Create todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
