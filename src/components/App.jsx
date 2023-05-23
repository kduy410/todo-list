import React, { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setTodo(value);
  }

  const handleClick = (event) => {
    setTodos(prev => [...prev, todo]);
    setTodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todo} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
