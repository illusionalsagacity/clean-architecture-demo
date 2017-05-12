"use strict";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import store from "./store";
import { addTodoUsecase } from "./usecases";
import Perf from "react-addons-perf";
import shortid from "shortid";

import "./style.css";
import "font-awesome/scss/font-awesome.scss";

import App from "./app";

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
store.dispatch(actions.users.add("user-1", "Test User"));
store.dispatch(actions.todoList.add("all", "All Todos", []));

addTodoUsecase("user-1", "name", "Test description", "1920-10-10");

render(<App />, document.getElementById("react-mount"));

// Perf.stop();

// let measurements = Perf.getLastMeasurements();

// Perf.printInclusive(measurements);
// Perf.printExclusive(measurements);
// Perf.printOperations(measurements);
