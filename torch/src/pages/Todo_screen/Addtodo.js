import React, { useState } from "react";
import "./Todo_screen.css";

function AddTodo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAdd(inputValue);
      setInputValue("");
      setShowForm(false); // 폼 숨기기
    }
  };

  const handleButtonClick = () => {
    setShowForm(true); // 폼 보이기
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleSubmit(event);
    }
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <div>
      {!showForm && (
        <button className="addButton" onClick={handleButtonClick}>
          <span className="buttontext">+</span>
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <button className="listbutton">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyUp={handleKeyDown}
              className="inputtext"
            />
          </button>
        </form>
      )}
    </div>
  );
}

export default AddTodo;
