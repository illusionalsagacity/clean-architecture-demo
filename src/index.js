"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoListContainer } from "Todo/containers";
import store from "./store";
import Perf from "react-addons-perf";

Perf.start();

render((<Provider store={store}>
  <div>
    <TodoListContainer todoListID={0} />
    <hr />
    <TodoListContainer todoListID={1} />
    <hr />
    <TodoListContainer todoListID={2} />
  </div>
</Provider>), document.getElementById("react-mount"));

Perf.stop();

let measurements = Perf.getLastMeasurements();

Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
// Perf.printOperations(measurements);
