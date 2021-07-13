import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";

function Completed() {
  const tasksArray = useSelector((state) => state.taskReducer);
  const workArray = tasksArray.filter(
    (taskElement) => taskElement.completed === true
  );
  return (
    <div class="tasks">
      {workArray
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
        })}
    </div>
  );
}

export default Completed;
