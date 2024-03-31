import React, { useState, useEffect } from "react";
import TodoList from "./Todolist";
import AddTodo from "./Addtodo";
import "./Todo_screen.css";
import { GrPowerCycle } from "react-icons/gr";
import { useHistory } from "react-router-dom";

function Todo_screen() {
  //현재 날짜 받아오기
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 문자열로 변환
    const day = String(now.getDate()).padStart(2, "0"); // 일을 가져온 후 문자열로 변환
    return `${year}-${month}-${day}`;
  };

  // 로컬 스토리지에서 데이터 불러오기
  const getStoredTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : { [getCurrentDate()]: [] };
  };

  const history = useHistory();

  // 할일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    setTodos(getStoredTodos());
  }, []);

  const [todos, setTodos] = useState(getStoredTodos());

  const handleAddTodo = (task) => {
    const dateKey = getCurrentDate();
    const newTodos = { ...todos };
    if (!newTodos[dateKey]) {
      newTodos[dateKey] = [];
    }
    const newTodoItem = {
      id: newTodos[dateKey].length + 1, // 배열 길이 + 1을 id로 사용하여 번호 부여
      task: task,
      completed: false,
    };
    newTodos[dateKey] = [...newTodos[dateKey], newTodoItem]; // 배열에 새로운 할일 추가
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const toCalendar = () => {
    history.push("/calendar");
  };

  return (
    <div className="container">
      <div className="titlecontainer">
        <h1 className="title">To-do List</h1>
        <button className="titlebutton" onClick={toCalendar}>
          <GrPowerCycle style={{ color: "#61ecff", display: "flex" }} />
        </button>
      </div>
      <div>{getCurrentDate()}</div>
      <TodoList
        todos={todos[getCurrentDate()] ? todos[getCurrentDate()] : []}
      />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default Todo_screen;
