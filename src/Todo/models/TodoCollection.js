"use strict";

import { Record, List } from "immutable";
import { getID } from "./TodoModel";
import * as ReverseLookup from "ReverseLookup";


const _shape = {
  todos: List(),
  idTable: ReverseLookup.empty,
  creatorTable: ReverseLookup.empty,
};

export class TodoCollection extends Record(_shape) {}

export const empty = new TodoCollection();
export const all = (collection: TodoCollection): List => collection.todos;

export const add = (collection: TodoCollection, todoModel) => {
  return collection.withMutations(state => {
    let i = state.todos.size;
    return state
      .update("todos", todos => todos.push(todoModel))
      .update("idTable", idTable => ReverseLookup.add(idTable, todoModel.id, i))
      .update("creatorTable", creatorTable => ReverseLookup.add(creatorTable, todoModel.creatorID, i));
  });
};

export const remove = (todoCollection, id) => {
  return todoCollection.withMutations(state => {
    let i = ReverseLookup.get(todoCollection.idTable, id).first();
    let creatorID = todoCollection.todos.get(i).creatorID;
    return state
      .update("todos", todos => todos.remove(i))
      .update("idTable", idTable => ReverseLookup.remove(idTable, id))
      .update("creatorTable", creatorTable => ReverseLookup.remove(creatorTable, creatorID, i));
  });
};

export const get = (todoCollection, id) => {
  let i = ReverseLookup.get(todoCollection.idTable, id).first();
  return todoCollection.todos.get(i);
};

const getIndicesByCreatorID = (todoCollection, ownerID) => ReverseLookup.get(todoCollection.creatorTable, ownerID).toArray();

export const getIDsByCreatorID = (todoCollection, ownerID) => {
  let indices = getIndicesByCreatorID(todoCollection, ownerID);
  return indices.map(i => todoCollection.todos.get(i).id);
};
