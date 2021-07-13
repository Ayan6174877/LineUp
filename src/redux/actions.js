import * as actions from "../redux/actionTypes";

export const taskAdded = (taskTitle, category, time, date) => ({
  type: actions.TASK_ADDED,
  payload: {
    task: taskTitle,
    category: category.value,
    time: time,
    date: date,
  },
});

export const taskUpdated = (id) => ({
  type: actions.TASK_UPDATED,
  payload: {
    id: id,
  },
});

export const userAdded = (name) => ({
  type: "ADD_USER",
  payload: {
    username: name,
  },
});
