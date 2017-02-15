"use strict";

import { TodoCollectionModel, TodoModel } from "./models";

const { create } = TodoModel;
const { add } = TodoCollection;

let nextTodoID = 0;

export default class TodoService {
  static addTodo(todoCollection, description) {
    return add(todoCollection, create(nextTodoID++, description));
  }

  static removeTodo(todoCollection, todo) {
    return remove(todoCollection, todo);
  }
}
