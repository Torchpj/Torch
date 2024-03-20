import React from "react";
import TodoScreen from "./pages/Todo_screen/Todo_screen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TodoScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
