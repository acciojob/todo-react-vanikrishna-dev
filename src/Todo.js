import React, { useState } from "react";
import "./style.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h2 className="title">To-Do List</h2>
            <div className="input-row">
                <input
                    className="todo-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add-btn" onClick={addTodo}>Add Todo</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <span>{todo}</span>
                        <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;