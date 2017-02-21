"use strict";

import { List, Record } from "immutable";
import { getID } from "./TodoListModel";
import * as ReverseLookup from "ReverseLookup";


const _shape = {
  todoLists: List(),
  indexTable: ReverseLookup.empty,
};

export class TodoListCollection extends Record(_shape) {}

export const empty = new TodoListCollection();
//TODO: add special todolists like .all ?

export const add = (todoListCollection, todoList) => {
  return todoListCollection.withMutations(state => {
    let i = state.todoLists.size || 0;
    return state
      .update("todoLists", todoLists => todoLists.push(todoList))
      .update("indexTable", indexTable => ReverseLookup.add(indexTable, todoList.id, i));
  });
};

export const remove = (todoListCollection, id) => {
  return todoListCollection.withMutations(state => {
    let i = ReverseLookup.get(state.indexTable, id).first();
    state
      .update("todoList", todoList => todoList.remove(i))
      .update("indexTable", indexTable => ReverseLookup.remove(indexTable, id));
  });
};

export const get = (todoListCollection, id) => {
  let i = ReverseLookup.get(todoListCollection.indexTable, id).first(); // one-to-one mapping for indexTable
  return todoListCollection.todoLists.get(i);
};
