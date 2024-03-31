import React, { useState } from "react";
import "./Todo_screen.css";
import Toggle from "./Toggle";
import Modal from "./Modal";

function TodoList({ todos }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClickModal = () => {
    setIsOpen(true);
  };
  return (
    <ul className="list-container">
      {todos.map((todo) => (
        <li key={todo.id} className="listitem">
          <button className="listbutton">
            <span className="listtext" onClick={onClickModal}>
              {todo.task}
            </span>
            {isOpen && (
              <Modal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
            <Toggle completed={todo.completed} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
