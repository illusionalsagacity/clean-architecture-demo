"use strict";

import { ADD, REMOVE } from "../actions/todoActions";
import { create } from "../models/TodoModel";
import { add, remove, empty } from "../models/TodoCollection";


const initialState = empty();

const todo = (state, action) => {
  switch (action.type) {
    case ADD:
      return create(action.payload);
    default:
      return state;
  }
};

const todos = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return add(state, todo(undefined, action));
    case REMOVE:
      return remove(state, action.payload.id);
    default:
      return state;
  }
};

export default todos;
