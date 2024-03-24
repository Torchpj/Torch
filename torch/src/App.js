// chrome extension: browser-router X
import { MemoryRouter as Router, Route } from "react-router-dom";
import Splash_screen from "./pages/Splash_screen/Splash_screen";
import Todo_screen from "./pages/Todo_screen/Todo_screen";
import Calendar_screen from "./pages/Calendar_screen/Calendar_screen";


function App() {

  return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Splash_screen} />
          <Route path="/todo" component={Todo_screen}/>
          <Route path="/calendar" component={Calendar_screen}/>
        </div>
      </Router>     
  );

}

export default App; 
