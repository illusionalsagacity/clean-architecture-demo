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

export const add = (todoListCollection, todoList) => {
  return todoListCollection.withMutations(state => {
    let i = state.todoLists.size;
    return state
      .update("todoLists", todoLists => todoLists.push(todoList))
      .update("indexTable", indexTable => ReverseLookup.add(indexTable, todoList.id, i));
  });
};

export const remove = (todoListCollection, id) => {
  let set = ReverseLookup.get(todoListCollection.indexTable, id);

  if (set) {
    return todoListCollection.withMutations(state => {
      let i = set.first();
      state
        .update("todoList", todoList => todoList.remove(i))
        .update("indexTable", indexTable => ReverseLookup.remove(indexTable, id));
    });
  }

  return todoListCollection;
};

export const update = (todoListCollection, id, todoList) => {
  let set = ReverseLookup.get(todoListCollection.indexTable, id);

  if (set) {
    let i = set.first(); // one-to-one mapping for indexTable
    return todoListCollection.update("todoLists", todoLists => todoLists.set(i, todoList));
  }
  return todoListCollection;
};

export const get = (todoListCollection, id) => {
  let set = ReverseLookup.get(todoListCollection.indexTable, id);

  if (set) {
    let i = set.first(); // one-to-one mapping for indexTable
    return todoListCollection.todoLists.get(i);
  }

  return [];
};

export const size = (collection: TodoListCollection): number => collection.todoLists.size;