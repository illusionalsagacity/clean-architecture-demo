"use strict";

import { Record, List } from "immutable";

const _shape = {
  id: undefined,
  name: "",
  todoIDs: List(),
};

export class TodoListModel extends Record(_shape) {
}

export const create = (payload) => {
  const { id, name } = payload;
  const todoIDs = List.of(...payload.todoIDs);
  return new TodoListModel({ id, name, todoIDs });
};

export const getID = (todoListModel) => todoListModel.id;

export const add = (todoListModel, id) => todoListModel.update("todoIDs", todoIDs => todoIDs.push(id));

export const getTodoIDs = (todoListModel) => {
  return todoListModel.todoIDs.toArray();
};

export const remove = (todoListModel, id) => todoListModel.update("todoIDs", todoIDs => todoIDs.remove(id));
