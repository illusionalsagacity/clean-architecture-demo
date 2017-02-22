"use strict";

import { Record, List } from "immutable";

const _shape = {
  id: undefined,
  todoIDs: List(),
};

export class TodoListModel extends Record(_shape) {
}

export const create = (payload) => {
  const { id } = payload;
  const todoIDs = List.of(...payload.todoIDs);
  return new TodoListModel({ id, todoIDs });
};

export const getID = (todoListModel) => todoListModel.id;

export const add = (todoListModel, id) => todoListModel.update("todoIDs", todoIDs => todoIDs.push(id));

export const getTodoIDs = (todoListModel) => {
  return todoListModel.todoIDs.toArray();
};

export const remove = (todoListModel, id) => todoListModel.update("todoIDs", todoIDs => todoIDs.remove(id));
