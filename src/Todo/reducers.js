"use strict";

import actions from "./actions";
import { add, remove, create, empty, TodoListCollectionModel, addTodoList, createTodoList } from "./models";

export const todo = (state, action) => {
  switch (action.type) {
    case actions.todo.ADD:
      return create(action.payload);
    default:
      return state;
  }
};

const initialState = empty;

export const todos = (state=initialState, action) => {
  switch (action.type) {
    case actions.todo.ADD:
      return add(state, todo(undefined, action));
    case actions.todo.REMOVE:
      return remove(state, action.payload.id);
    default:
      return state;
  }
};

const todoListsState = new TodoListCollectionModel();

const todoList = (state, action) => {
  switch (action.type) {
    case actions.todoList.ADD:
      return createTodoList(action.payload.id, action.payload.todoIDs);
    default:
      return state;
  }
};

export const todoLists = (state=todoListsState, action) => {
  switch (action.type) {
    case actions.todoList.ADD:
      return addTodoList(state, todoList(undefined, action));
    default:
      return state;
  }
};
