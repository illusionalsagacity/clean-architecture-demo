"use strict";

import { connect } from "react-redux";
import { createSelector } from "reselect";
import { TodoComponent, TodoListComponent, TodoFormComponent } from "./components";
import models from "./models";
const { TodoModel, TodoCollection, TodoListModel, TodoListCollection, UserCollection } = models;
import { todosSelector, todoIDSelector, todoListsSelector, todoListIDSelector, usersSelector, userIDSelector } from "./selectors";

import usecases from "./usecases";
import * as services from "./services";
const { createTodoService, createValidationService } = services;
const { createAddTodoUsecase } = usecases;


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

const makeTodoListSelector = () => createSelector(
  todoListsSelector,
  todoListIDSelector,
  (todoLists, todoListID) => TodoListCollection.get(todoLists, todoListID),
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

const makeTodoListMapStateToProps = () => {
  const todoListSelector = makeTodoListSelector();

  const mapStateToProps = (state, ownProps) => {
    const todoList = todoListSelector(state, ownProps);
    const todoIDs = TodoListModel.getTodoIDs(todoList);

    return {
      todoIDs,
    };
  };

  return mapStateToProps;
};

// TodoListContainer takes in an ID for a TodoList
// todoLists: { id: TodoIDs[] }
export const TodoListContainer = connect(makeTodoListMapStateToProps())(TodoListComponent);


export const TodoFormContainer = connect(undefined, (dispatch, ownProps) => {
  debugger;

  const addTodoUsecase = createAddTodoUsecase({
    TodoService: createTodoService(dispatch),
    ValidationService: createValidationService(dispatch),
  });

  return {
    addTodo: (name, description) => addTodoUsecase(ownProps.userID, name, description),
    //                                                      should be state.currentUser when implemented fully
  };
})(TodoFormComponent);
