import React from "react";
import TaskItem from "./TaskItem";
import "../styles/taskitem.css";
import NoTask from "./NoTask";
import { useSelector } from "react-redux";

function TaskList() {
  const tasksArray = useSelector((state) => state.taskReducer);
  // state changes refresh the U

  return (
    <div class="tasks">
      {tasksArray.length === 0 ? (
        <NoTask />
      ) : (
        tasksArray
          .slice(0)
          .reverse()
          .map((taskElement) => {
            return (
              <TaskItem
                dataKey={`${taskElement.id}`}
                cname={`${taskElement.category.toLowerCase()}-task`}
                spanclass={`${taskElement.category.toLowerCase()}-theme`}
                typeName={`${taskElement.category.toLowerCase()}`}
                date={`${taskElement.date}`}
                time={`${taskElement.time}`}
                title={`${taskElement.task}`}
                completed={`${taskElement.completed}`}
              />
            );
          })
      )}
    </div>
  );
}

export default TaskList;
