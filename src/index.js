"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoListContainer } from "Todo/containers";
import store from "./store";


render((<Provider store={store}>
  <TodoListContainer id={0} />
</Provider>), document.getElementById("react-mount"));
