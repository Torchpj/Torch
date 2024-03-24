import React from "react";
import "./Todo_screen.css";
import Toggle from "./Toggle";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="listitem">
          <button className="listbutton">
            <span className="listtext">{todo.task}</span>
            <Toggle completed={todo.completed} />
          </button>
        </li>
      ))}
    </ul>
  );
}


export default TodoList;
