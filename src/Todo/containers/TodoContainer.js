// @flow
import React from "react";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import TodoComponent from "../components/TodoComponent";
import models from "../models";
import { selectTodoByIDWithUser } from "../selectors";


const { TodoModel, TodoCollection, UserCollection, UserModel } = models;

const mapStateToProps = (state, ownProps) => {
  const { todo, user } = selectTodoByIDWithUser(state, ownProps);

  return {
    date: TodoModel.getDate(todo),
    description: TodoModel.getDescription(todo),
    name: TodoModel.getName(todo),
    userName: UserModel.getName(user),
  };
};


const TodoContainer = connect(mapStateToProps)(TodoComponent);

export default TodoContainer;
