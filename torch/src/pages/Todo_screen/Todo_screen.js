import React, { useState } from "react";
import TodoList from "./Todolist";
import AddTodo from "./Addtodo";
import "./Todo_screen.css";
import { GrPowerCycle } from "react-icons/gr";
import {useHistory} from "react-router-dom"

function TodoScreen() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const history =useHistory();
  const toCalendar = () => {
    history.push('/calendar');
  }

  return (
    <div className="container">
      <div className="titlecontainer">
        <h1 className="title">To-do List</h1>
        <button className="titlebutton" onClick={toCalendar}>
          <GrPowerCycle style={{ color: "#61ecff" }} />
        </button>
      </div>
      <TodoList todos={todos} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default TodoScreen;
