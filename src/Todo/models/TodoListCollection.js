// @flow

import { List, Record } from "immutable";
import { getID } from "./TodoListModel";
import * as ReverseLookup from "../../ReverseLookup";
import type { TodoCollection } from "./TodoCollection";


const todoListCollectionShape = {
  todoLists: List(),
  indexTable: ReverseLookup.empty,
};

export class TodoListCollection extends Record(todoListCollectionShape) {}

export const empty = new TodoListCollection();

export const add = (todoListCollection: TodoListCollection, todoList: TodoCollection): TodoListCollection => {
  return todoListCollection.withMutations((state) => {
    const i = state.todoLists.size;
    return state
      .update("todoLists", todoLists => todoLists.push(todoList))
      .update("indexTable", indexTable => ReverseLookup.add(indexTable, getID(todoList), i));
  });
};

export const remove = (todoListCollection: TodoListCollection, id: string): TodoListCollection => {
  const set = ReverseLookup.get(todoListCollection.indexTable, id);

  if (set) {
    return todoListCollection.withMutations((state) => {
      const i = set.first();
      state
        .update("todoList", todoList => todoList.remove(i))
        .update("indexTable", indexTable => ReverseLookup.remove(indexTable, id));
    });
  }

  return todoListCollection;
};

export const update = (todoListCollection: TodoListCollection, id: string, todoList: TodoCollection): TodoListCollection => {
  const set = ReverseLookup.get(todoListCollection.indexTable, id);

  if (set) {
    const i = set.first(); // one-to-one mapping for indexTable
    return todoListCollection.update("todoLists", todoLists => todoLists.set(i, todoList));
  }
  return todoListCollection;
};

export const get = (todoListCollection: TodoListCollection, id: string): ?TodoCollection => {
  const set = ReverseLookup.get(todoListCollection.indexTable, id);
  return (set) ? todoListCollection.todoLists.get(set.first()) : null;
};

export const size = (collection: TodoListCollection): number => collection.todoLists.size;
