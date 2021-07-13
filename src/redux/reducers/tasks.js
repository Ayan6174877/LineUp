import { v4 as uuidv4 } from "uuid";
import * as actions from "../actionTypes";

// 11str reducer
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: uuidv4(),
          task: action.payload.task,
          category: action.payload.category,
          time: action.payload.time,
          date: action.payload.date,
          completed: false,
        },
      ];
    case actions.TASK_REMOVED:
      return [...state.filter((task) => task.id !== action.payload.id)];
    case actions.TASK_UPDATED:
      return [
        ...state.map((task) =>
          task.id === action.payload.id ? { ...task, completed: true } : task
        ),
      ];
    default:
      return state;
  }
};

export default taskReducer;
