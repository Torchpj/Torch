//chrome extension: browser-router X
import { MemoryRouter as Router, Route } from "react-router-dom";
import Splash_screen from "./pages/Splash_screen/Splash_screen";
import TodoScreen from "./pages/Todo_screen/Todo_screen"
import CalendarScreen from "./pages/Calendar_screen/Calendar_screen";


function App() {

  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Splash_screen} />
          <Route path="/todo" component={TodoScreen}/>
          <Route path="/calendar" component={CalendarScreen}/>
      </div>
    </Router>
   
  );
}

export default App;
