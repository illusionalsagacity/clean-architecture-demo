"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoListContainer } from "Todo/containers";
import store from "./store";


render((<Provider store={store}>
  <div>
    <TodoListContainer id={0} />
    <hr />
    <TodoListContainer id={1} />
    <hr />
    <TodoListContainer id={2} />
  </div>
</Provider>), document.getElementById("react-mount"));
