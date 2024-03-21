import React from "react";
import "./Todo_screen.css";
import Toggle from "./Toggle";

function TodoList({ todos }) {
  return (
    <ul className="list-container">
      {todos.map((todo, index) => (
        <li key={index}>
          <button className="listbutton">
            <div className="block">
              <span className="listtext">{todo}</span>
            </div>
            <div className="block">
              <Toggle />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
