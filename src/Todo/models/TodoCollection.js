"use strict";

import { Record, List } from "immutable";
import { getID } from "./TodoModel";

const _shape = {
  todos: List(),
};

export class TodoCollection extends Record(_shape) {}

export const empty = new TodoCollection();

export const add = (todoCollection, todoModel) => todoCollection.update("todos", todos => todos.push(todoModel));

export const remove = (todoCollection, id) => todoCollection.update("todos",
  todos => todos.filterNot(todo => getID(todo) === id)
);

export const get = (todoCollection, id) => todoCollection.todos.find(todo => getID(todo) === id);
