"use strict";

import { ADD } from "../actions/todoListActions";
import { create } from "../models/TodoListModel";
import { add, remove, empty } from "../models/TodoListCollection";


const initialState = empty;

const todoList = (state, action) => {
  switch (action.type) {
    case ADD:
      return create(action.payload);
    default:
      return state;
  }
};

const todoLists = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return add(state, todoList(undefined, action));
    default:
      return state;
  }
};

export default todoLists;
