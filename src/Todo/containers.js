"use strict";

import { connect } from "react-redux";
import { createSelector } from "reselect";
import { TodoComponent, TodoListComponent } from "./components";
import models from "./models";
const { TodoModel, TodoCollection, TodoListCollection, UserCollection } = models;


const todosSelector = state => state.todos;
const todoIDSelector = (state, props) => props.todoID;

const todoListsSelector = state => state.todoLists;
const todoListIDSelector = (state, props) => props.todoListID;

const usersSelector = state => state.users;
const userIDSelector = (state, props) => props.userID;

const makeTodoSelector = () => createSelector(
  todosSelector,
  todoIDSelector,
  (todos, todoID) => TodoCollection.get(todos, todoID),
);

const makeUserSelector = () => createSelector(
  usersSelector,
  userIDSelector,
  (users, userID) => UserCollection.get(users, userID),
);

const makeTodoMapStateToProps = () => {
  const userSelector = makeUserSelector(),
        todoSelector = makeTodoSelector();

  const mapStateToProps = (state, ownProps) => {
    const todo = todoSelector(state, ownProps),
          user = userSelector(state, { userID: TodoModel.getCreatorID(todo) });

    return {
      description: todo.description,
      name: todo.name,
      userName: user.name,
    };
  };

  return mapStateToProps;
};

// TodoContainer takes in an ID for a todo
export const TodoContainer = connect(makeTodoMapStateToProps())(TodoComponent);


let TodoList = {
  mapStateToProps: (state, ownProps) => {
    const todoLists = todoListsSelector(state);
    const todoList = TodoListCollection.get(todoLists, ownProps.todoListID);
    const { todoIDs } = todoList;

    return {
      todoIDs,
    };
  },
};

// TodoListContainer takes in an ID for a TodoList
// todoLists: { id: TodoIDs[] }
export const TodoListContainer = connect(TodoList.mapStateToProps)(TodoListComponent);
