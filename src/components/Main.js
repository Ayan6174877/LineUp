import React from "react";
import "../styles/main.css";
import "../styles/theme.css";
import ListNavigation from "./ListNavigation";
import "../styles/main.css";
import Header from "./Header";
import TaskList from "./TaskList";
import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Work from "./tasks/Work";
import Personal from "./tasks/Personal";
import Completed from "./tasks/Completed";
import AddNewUser from "./AddNewUser";
import { useSelector } from "react-redux";

function Main(props) {
  const [open, setOpen] = React.useState(false);
  const [uservalue, setUserValue] = React.useState("Guest");
  const username = useSelector((state) => state.loggedreducer);

  React.useEffect(() => {
    // let username = localStorage.getItem("mytime");
    if (username === null) {
      setOpen(true);
    } else {
      setUserValue(username.username);
      setOpen(false);
    }
  }, []);

  return (
    <Router>
      <Header username={uservalue} />
      <div className="main-app">
        <div className="left-main-app">
          <ListNavigation />
          <AddNewUser show={open} />
        </div>
        <div className="main-component">
          <Switch>
            <Route exact path="/tasks/work">
              <div class="main-section">
                <Work />
              </div>
            </Route>
            <Route exact path="/tasks/personal">
              <div class="main-section">
                <Personal />
              </div>
            </Route>
            <Route exact path="/tasks/completed">
              <div class="main-section">
                <Completed />
              </div>
            </Route>
            <Route exact path="/tasks">
              <div class="main-section">
                <TaskList />
              </div>
            </Route>
            <Route path="/">
              <Redirect to="/tasks" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Main;
