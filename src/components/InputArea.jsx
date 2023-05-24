import React, { useState } from "react";

export default function InputArea(props) {
    const [todo, setTodo] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        setTodo(value);
      }

    return (
        <div className="form">
            <input type="text" value={todo} onChange={handleChange} />
            <button onClick={() => {
                props.onAddItem(todo)
                setTodo("")
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}