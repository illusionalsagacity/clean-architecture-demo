// @flow
import { createSelector } from "reselect";
import { connect } from "react-redux";
import TodoListComponent from "../components/TodoListComponent";
import models from "../models";
const { TodoListModel, TodoListCollection } = models;
import { selectTodoListByID } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  const todoList = selectTodoListByID(state, ownProps);
  const todoIDs = TodoListModel.getTodoIDs(todoList);

  return {
    todoIDs,
  };
};

// TodoListContainer takes in an ID for a TodoList
// todoLists: { id: TodoIDs[] }
const TodoListContainer = connect(mapStateToProps)(TodoListComponent);

export default TodoListContainer;
