"use strict";

import { Map, List, Record } from "immutable";
// import ReverseLookupTable from "ReverseLookup";


//TODO: implement
export class TodoModel extends Record({ id: undefined, name: "", description: "" }) {

}

export const create = ({ id, name, description }) => new TodoModel({ id, name, description });

//TODO: implement
export class TodoCollectionModel extends Record({ todoList: List() }) {
  add = (todoModel) => add(this, todoModel);
  remove = (todoModel) => remove(this, todoModel);
}

export const empty = new TodoCollectionModel();

export const add = (state, todoModel) => state.update("todoList", todoList => todoList.push(todoModel));

export const remove = (state, id) => state.update("todoList", todoList => todoList.filterNot(todo => todo.id === id));

export const getTodoByID = (state, id) => state.todoList.find(todo => todo.id === id);

//TODO: implement
export class TodoListModel extends Record({ id: undefined, todoIDs: List() }) {}
//

export const createTodoList = (id, todoIDs) => new TodoListModel({ id, todoIDs });

export const addTodoToList = (state, todoID) => state.todoIDs.push(todoID);


//TODO: implement
export class TodoListCollectionModel extends Record({ todoLists: List() }) {}

export const addTodoList = (state, todoList) => state.update("todoLists", todoLists =>todoLists.push(todoList));

export const getTodoListByID = (state, id) => state.todoLists.find(todoList => todoList.id === id);
