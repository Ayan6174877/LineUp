import React from "react";
import "../styles/taskitem.css";
import moment from "moment";
import FlagIcon from "@material-ui/icons/Flag";
import store from "../redux/store";
import { taskUpdated } from "../redux/actions";

function TaskItem(props) {
  function getTaskDone(e) {
    // calling reducer to update current value
    e.preventDefault();
    console.log(e.currentTarget.id);
    store.dispatch(taskUpdated(e.currentTarget.id));
  }

  return (
    <div
      id={props.dataKey}
      className={`task-item-div ${props.cname} completed-task-${props.completed}`}
    >
      <div className="task-item-content">
        <ul>
          <li>
            <span className={`task-type ${props.spanclass}`}>
              {props.typeName}
            </span>
          </li>
          <li>
            <h2 className="task-title">{props.title}</h2>
          </li>
          <li>
            <p className="task-date">
              <span> Schedule </span> -
              <span>
                {moment(props.date).format("dddd, D MMMM Y")} at
                {moment(props.time).format(" hh:mm A")}{" "}
              </span>
            </p>
          </li>
          <li>
            <span id={props.dataKey} role="button" onClick={getTaskDone}>
              <FlagIcon
                className={
                  props.completed === "true" ? "completed-task" : "undone-task"
                }
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TaskItem;
