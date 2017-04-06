// @flow
import React from "react";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import TodoComponent from "../components/TodoComponent";
import models from "../models";
const { TodoModel, TodoCollection, UserCollection, UserModel } = models;
import { todosSelector, propTodoIDSelector, todoListsSelector, todoListIDSelector, usersSelector, userIDSelector } from "../selectors";

const makeTodoSelector = () => createSelector(
  todosSelector,
  propTodoIDSelector,
  (todos, todoID) => TodoCollection.get(todos, todoID),
);

const makeUserSelector = () => createSelector(
  usersSelector,
  userIDSelector,
  (users, userID) => UserCollection.get(users, userID),
);


const makeMapStateToProps = () => {
  const userSelector = makeUserSelector(),
        todoSelector = makeTodoSelector();

  const mapStateToProps = (state, ownProps) => {
    const todo = todoSelector(state, ownProps),
          user = userSelector(state, { userID: TodoModel.getCreatorID(todo) });

    return {
      description: TodoModel.getDescription(todo),
      name: TodoModel.getName(todo),
      userName: UserModel.getName(user),
    };
  };

  return mapStateToProps;
};


const TodoContainer = connect(makeMapStateToProps())(TodoComponent);

export default TodoContainer;
