import Navbar from "./Navbar";
import Home from "./Home";
import NoMatch from "./404";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import About from "./About";
import Author from "./Author";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Author />
        <div className="content">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Redirect exact from="/" to="home"></Redirect>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
