"use strict";

import { ADD, UPDATE } from "../actions/todoListActions";
import * as TodoListModel from "../models/TodoListModel";
import { add, remove, empty, get, update } from "../models/TodoListCollection";


const initialState = empty;

const todoList = (state, action) => {
  switch (action.type) {
    case ADD:
      return TodoListModel.create(action.payload);
    case UPDATE:
      return TodoListModel.add(state, action.payload.todoID);
    default:
      return state;
  }
};

const todoLists = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return add(state, todoList(undefined, action));
    case UPDATE:
      return update(state, action.payload.id, todoList(get(state, action.payload.id), action));
    default:
      return state;
  }
};

export default todoLists;
