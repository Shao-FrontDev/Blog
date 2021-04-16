import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Create from "./Create";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}
