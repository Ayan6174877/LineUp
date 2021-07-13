import { createStore, combineReducers } from "redux";
import taskReducer from "./reducers/tasks";
import loggedreducer from "./reducers/user";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return [];
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return [];
  }
}

const allreducers = combineReducers({
  taskReducer,
  loggedreducer,
});

const store = createStore(
  allreducers,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));
// preloadedState is optional and determines the initial state of the app
// enhancer is also an optional argument. It will help you enhance store with third-party capabilities.
// createStore(reducer, [preloadedState], [enhancer])

export default store;
