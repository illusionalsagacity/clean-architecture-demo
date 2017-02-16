"use strict";

import { Record, List } from "immutable";

const _shape = {
  id: undefined,
  todoIDs: List(),
};

export class TodoListModel extends Record(_shape) {}

export const create = (payload) => new TodoListModel(payload);

export const getID = (todoListModel) => todoListModel.id;

export const add = (todoListModel, id) => todoListModel.update("todoIDs",
  todoIDs => todoIDs.push(id)
);

export const remove = (todoListModel, id) => todoListModel.update("todoIDs", todoIDs => todoIDs.remove(id));
