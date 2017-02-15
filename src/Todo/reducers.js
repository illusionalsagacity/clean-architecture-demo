"use strict";

import { ADD, REMOVE, ADD_TODO_LIST } from "./actions";
import { add, remove, create, empty, TodoListCollectionModel, addTodoList, createTodoList } from "./models";

export const todo = (state, action) => {
  switch (action.type) {
    case ADD:
      return create(action.payload);
    default:
      return state;
  }
};

const initialState = empty;

export const todos = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return add(state, todo(undefined, action));
    case REMOVE:
      return remove(state, action.payload.id);
    default:
      return state;
  }
};

//TODO: implement todoLists, redux-thunk

const todoListState = new TodoListCollectionModel();

const todoList = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const todoLists = (state=todoListState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return addTodoList(state, createTodoList(action.payload.id, action.payload.todoIDs));
    default:
      return state;
  }
};
