import React from "react";
import "./Todo_screen.css";
import Toggle from "./Toggle";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="listitem">
          <button className="listbutton">
            <span className="listtext">{todo}</span>
            <Toggle />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
