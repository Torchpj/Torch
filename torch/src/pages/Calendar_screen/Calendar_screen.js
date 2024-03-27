import React, { useState, useEffect } from "react";
import "./Calendar_screen.css";
import { GrPowerCycle } from "react-icons/gr";
import { useHistory } from "react-router-dom";

function CalendarScreen() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [todoList, setTodoList] = useState([]);

    // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedTodos = localStorage.getItem(`todos`);
    console.log('Stored todos:', storedTodos);
  
    if (storedTodos) {
      try {
          const parsedTodos = JSON.parse(storedTodos);
          setTodoList(parsedTodos);
      } catch (error) {
          console.error('Error parsing storedTodos:', error);
          setTodoList([]);
          }
    } else {
        setTodoList([]);
    }
  }, [selectedDate]);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  // 선택한 날짜에 해당하는 할일 목록을 가져오는 함수
  const getTodoList = () => {

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const selectedDateformat = `${year}-${month.toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`
    //console.log(selectedDateformat);
    const selectedTodo = todoList[selectedDateformat]; // 선택한 날짜에 해당하는 할일 목록
    if (selectedTodo) {
      return selectedTodo.map((todoItem) => (
        <div key={todoItem.id}>{todoItem.task}</div>
      ));
    } else {
      return <div>No tasks for this date</div>;
    }
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const totalDays = daysInMonth(year, date.getMonth());
    const startDay = startDayOfMonth(year, date.getMonth());
    const calendar = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const dayCopy = dayCounter;
        if ((i === 0 && j < startDay) || dayCounter > totalDays) {
          week.push(<td key={`${i}${j}`}></td>);
        } else {
          week.push(
            <td
              key={`${i}${j}`}
              // className="circle"
              className={`circle ${selectedDate === dayCopy ? "clicked" : ""}`}
              onClick={() => handleDateClick(dayCopy)}
            >
              {dayCounter}
            </td>
          );
          dayCounter++;
        }
      }
      calendar.push(
        <tr id="wrapper" key={i}>
          {week}
        </tr>
      );
      if (dayCounter > totalDays) break;
    }

    return calendar;
  };

  const changeMonth = (increment) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + increment);
    setDate(newDate);
    setSelectedDate(null); // 월 변경 시 선택된 날짜 초기화
  };

  const formattedDate = selectedDate
    ? `${date.getFullYear()}.${date.getMonth() + 1}.${selectedDate}`
    : null;

  //페이지 이동
  const history = useHistory();
  const toTodo = () => {
    history.push("/todo");
  };

  return (
    <div className="container">
      <div className="titlecontainer">
        <h1 className="title">Calendar</h1>
        <button className="titlebutton" onClick={toTodo}>
          <GrPowerCycle style={{ color: "#61ecff" }} />
        </button>
      </div>
      <div id="a">
        <div id="month-year">{`${date.toLocaleString("en-US", {
          month: "long",
        })} ${date.getFullYear()}`}</div>
        <div id="month-changer">
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <button onClick={() => changeMonth(1)}>{">"}</button>
        </div>
      </div>
      <div className="calendar-table">
        <div id="thead">
          <div id="day">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
        </div>
        <div id="date">{renderCalendar()}</div>
      </div>

      {selectedDate && (
        <div id="selected-date">
          <p>{formattedDate}</p>
          <div className="tasks-container">
            {getTodoList()}
          </div>
        </div>
      )}
    </div>
  );
}
export default CalendarScreen;