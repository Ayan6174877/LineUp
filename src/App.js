import React from "react";
import "./App.css";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  const loggeduser = useSelector((state) => state.loggedreducer);
  let username = loggeduser === null ? "Guest" : loggeduser;
  return (
    <div className="App">
      <Main username={username} />
    </div>
  );
}

export default App;
