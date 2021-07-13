import React, { useState } from "react";
import "../styles/addtask.css";
import Select from "react-select";
import TaskCalender from "./TaskCalender";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import store from "../redux/store";
import { taskAdded } from "../redux/actions";
import moment from "moment";
import Snackbar from "@material-ui/core/Snackbar";

function AddTask() {
  const [taskTitle, settaskTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [modalState, setModalState] = useState(0);
  const [date, setDate] = useState(new Date());
  const [dispatchTime, setDispatchTime] = React.useState(moment());
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const createTask = (event) => {
    event.preventDefault();
    store.dispatch(taskAdded(taskTitle, category, dispatchTime, date));
    setModalState(0);
    settaskTitle("");
    setCategory(null);
    handleClick({ vertical: "bottom", horizontal: "right" });
  };

  const handleValueChange = (value) => {
    setDispatchTime(value);
  };

  const categories = [
    { value: "Work", label: "Work" },
    { value: "personal", label: "Personal" },
  ];

  const handleCategory = (category) => {
    setCategory(category);
  };

  function createNewDate(value) {
    setDate(value);
    setModalState(modalState + 1);
  }

  return (
    <>
      <div className="add-task-form">
        <div class="modal-title">
          {modalState === 0 ? (
            ""
          ) : (
            <span className="go-back-btn" onClick={() => setModalState(0)}>
              <ArrowBackIosIcon />
            </span>
          )}
          <h2>What's your goal for today?</h2>
        </div>
        <div class="task-form">
          {modalState === 0 ? (
            <div class="task-input-field">
              <TaskCalender
                cname="modal-calender"
                date={date}
                onChange={(value) => createNewDate(value)}
              />
            </div>
          ) : (
            <div class="task-input-field">
              <TimePicker
                className="select-time"
                showSecond={false}
                use12Hours={true}
                value={dispatchTime}
                onChange={handleValueChange}
                placeholder="Select a time"
              />
              <input
                id="title"
                type="text"
                required
                maxLength="140"
                value={taskTitle}
                onChange={(e) => settaskTitle(e.target.value)}
                placeholder="Add task title"
              />
              <Select
                value={category}
                onChange={handleCategory}
                required
                options={categories}
                placeholder="category"
                className="select"
              />
              <div class="form-btn">
                <button onClick={createTask} className="add-task-btn">
                  Add Task
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="A Task is created!"
        key={vertical + horizontal}
      />
    </>
  );
}

export default AddTask;
