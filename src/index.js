"use strict";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoListContainer, TodoFormContainer } from "Todo/containers";
import store from "./store";
import Perf from "react-addons-perf";
import shortid from "shortid";

import "./style.css";

import Todo from "Todo";
const { actions } = Todo;


// Perf.start();
//
let userID = shortid.generate();

store.dispatch(actions.user.add(userID, "Test User"));
store.dispatch(actions.todoList.add("all", []));

render((<Provider store={store}>
  <div className="react__root">
    <TodoFormContainer userID={userID} />
    <div>
      <TodoListContainer todoListID="all" />
    </div>
  </div>
</Provider>), document.getElementById("react-mount"));

// Perf.stop();

// let measurements = Perf.getLastMeasurements();

// Perf.printInclusive(measurements);
// Perf.printExclusive(measurements);
// Perf.printOperations(measurements);
