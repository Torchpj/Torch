import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash_screen from "./pages/Splash_screen/Splash_screen";
import TodoScreen from "./pages/Todo_screen/Todo_screen";

function App() {
  return (
    <BrowserRouter>
      <TodoScreen />
    </BrowserRouter>
  );
}

export default App;
