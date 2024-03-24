import React, { useState } from "react";
import TodoList from "./Todolist";
import AddTodo from "./Addtodo";
import "./Todo_screen.css";

function TodoScreen() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1 className="title">To-do List</h1>
      <TodoList todos={todos} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default TodoScreen;
