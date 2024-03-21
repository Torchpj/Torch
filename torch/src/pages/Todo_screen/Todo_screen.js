import React, { useState } from "react";
import TodoList from "./Todolist";
import AddTodo from "./Addtodo";
import "./Todo_screen.css";
import { GrPowerCycle } from "react-icons/gr";

function TodoScreen() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container">
      <div className="titlecontainer">
        <h1 className="title">To-do List</h1>
        <button className="titlebutton">
          <GrPowerCycle style={{ color: "#61ecff" }} />
        </button>
      </div>
      <TodoList todos={todos} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default TodoScreen;
