import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const listOfPitchers = (
  state = ["Maud Nelson", "Ila Borders", "Don Newcombe", "CC Sabathia"],
  action
) => {
  if (action.type === "ADD_PITCHER") {
    return [...state, action.payload];
  }
  return state;
};

const listOfCatchers = (
  state = ["Roy Campanella", "Elston Howard", "Kenji Jojima"],
  action
) => {
  if (action.type === "ADD_CATCHER") {
    return [...state, action.payload];
  }
  return state;
};

const myPitcher = (
  state = "Maud Nelson",
  action
) => {
  if (action.type === "ADD_MOUND") {
    return action.payload;
  }
  return state;
};

const myCatcher = (
    state = "Elston Howard",
    action
  ) => {
    if (action.type === "ADD_PLATE") {
      return action.payload;
    }
    return state;
  };

/** TODO: Create store */
const storeInstance = createStore(
  combineReducers({
    listOfPitchers,
    listOfCatchers,
    myPitcher,
    myCatcher,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
