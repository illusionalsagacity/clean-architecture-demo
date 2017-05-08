"use strict";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoListContainer, TodoFormContainer } from "Todo/containers";
import store from "./store";
import { addTodoUsecase } from "./usecases";
import Perf from "react-addons-perf";
import shortid from "shortid";

import "./style.css";
import "font-awesome/scss/font-awesome.scss";

import { actions } from "Todo";

// const MyWorker = require("worker-loader!./worker.js");

// let myWorker = new MyWorker();

// myWorker.postMessage({
//   foo: "bar",
// });

// myWorker.onmessage = e => {
//   console.log(e);
// };


// Perf.start();
//
let userID = shortid.generate();

store.dispatch(actions.users.add(userID, "Test User"));
store.dispatch(actions.todoList.add("all", []));

addTodoUsecase(userID, "name", "Test description", "1920-10-10");

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
