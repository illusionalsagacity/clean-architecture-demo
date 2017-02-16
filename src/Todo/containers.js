"use strict";

import { connect } from "react-redux";
import { TodoComponent, TodoListComponent } from "./components";
import models from "./models";
const { TodoModel, TodoCollection, TodoListCollection, UserCollection } = models;

const getTodos = state => state.todos;
const getTodoLists = state => state.todoLists;
const getUsers = state => state.users;

let Todo = {
  mapStateToProps: (state, ownProps) => {
    let todos = getTodos(state); // TODO: memoize using reselect
    let users = getUsers(state);
    let todo = TodoCollection.get(todos, ownProps.id);
    let user = UserCollection.get(users, TodoModel.getCreatorID(todo));

    return {
      description: todo.description,
      name: todo.name,
      userName: user.name,
    };
  },
};

// TodoContainer takes in an ID for a todo
export const TodoContainer = connect(Todo.mapStateToProps)(TodoComponent);


let TodoList = {
  mapStateToProps: (state, ownProps) => {
    const todoLists = getTodoLists(state);
    const todoList = TodoListCollection.get(todoLists, ownProps.id);
    const { todoIDs } = todoList;

    return {
      todoIDs,
    };
  },
};

// TodoListContainer takes in an ID for a TodoList
// todoLists: { id: TodoIDs[] }
export const TodoListContainer = connect(TodoList.mapStateToProps)(TodoListComponent);
