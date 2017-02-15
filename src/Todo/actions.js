"use strict";

export const ADD = "@todo/ADD";
export const REMOVE = "@todo/REMOVE";

export const add = (id, name, description) => {
  return {
    type: ADD,
    payload: { id, name, description },
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const ADD_TODO_LIST = "@todoList/ADD";

export const addTodoList = (id, todoIDs) => {
  return {
    type: ADD_TODO_LIST,
    payload: { id, todoIDs },
  };
};
