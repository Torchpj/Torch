
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash_screen from "./pages/Splash_screen/Splash_screen";
import TodoScreen from "./pages/Todo_screen/Todo_screen"
import CalendarScreen from "./pages/Calendar_screen/Calendar_screen";

//TodoScreen
//CalendarScreen
function App() {
  return (
    <BrowserRouter>
    <CalendarScreen/>
    </BrowserRouter>
  );
}

export default App;
