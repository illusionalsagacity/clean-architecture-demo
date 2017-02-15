"use strict";

import { connect } from "react-redux";
import { TodoComponent, TodoListComponent } from "./components";
import { getTodoByID, getTodoListByID } from "./models";

let Todo = {
  mapStateToProps: (state, ownProps) => {
    let todos = getTodos(state); // TODO: memoize using reselect
    let todo = getTodoByID(todos, ownProps.id);

    return {
      name: todo.name,
      description: todo.description,
    };
  },
};

// TodoContainer takes in an ID for a todo
export const TodoContainer = connect(Todo.mapStateToProps)(TodoComponent);

const getTodos = state => state.todos;
const getTodoLists = state => state.todoLists;

let TodoList = {
  mapStateToProps: (state, ownProps) => {
    const todoLists = getTodoLists(state);
    const todoList = getTodoListByID(todoLists, ownProps.id);
    const { todoIDs } = todoList;

    return {
      todoIDs,
    };
  },
};

// TodoListContainer takes in an ID for a TodoList
// todoLists: { id: TodoIDs[] }
export const TodoListContainer = connect(TodoList.mapStateToProps)(TodoListComponent);
