"use strict";

import { List, Record } from "immutable";
import { getID } from "./TodoListModel";


const _shape = {
  todoLists: List(),
};

export class TodoListCollection extends Record(_shape) {}

export const empty = new TodoListCollection();

export const add = (todoListCollection, todoList) => todoListCollection.update("todoLists", todoLists => todoLists.push(todoList));

export const get = (todoListCollection, id) => todoListCollection.todoLists.find(todoList => getID(todoList) === id);
