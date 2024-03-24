import React, { useState, useEffect } from "react";
import TodoList from "./Todolist";
import AddTodo from "./Addtodo";
import "./Todo_screen.css";

function TodoScreen() {

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 문자열로 변환
    const day = String(now.getDate()).padStart(2, "0"); // 일을 가져온 후 문자열로 변환
    return `${year}-${month}-${day}`;
  };

  // const [todos, setTodos] = useState({
  //   [getCurrentDate()]: [], // 현재 날짜를 키로 하는 할일 목록 초기화
  // });
  // 로컬 스토리지에서 데이터 불러오기
  const getStoredTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : { [getCurrentDate()]: [] };
  };

  const [todos, setTodos] = useState(getStoredTodos());

  // 할일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    setTodos(getStoredTodos());
  }, []);

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

  return (
    <div>
      <h1 className="title">To-do List</h1>
      <TodoList todos={todos[getCurrentDate()]} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default TodoScreen;
