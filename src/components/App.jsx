import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";

function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (item) => {
    setTodos(prevs => [...prevs, item]);
  }

  const deleteItem = (id) => {
    setTodos(prevs => {
      return prevs.filter((value, index) => index !== id)
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAddItem={addItem}/>
      <div>
        <ul>
          {todos.map((item, index) => <Item key={index} id={index} item={item} onChecked={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
