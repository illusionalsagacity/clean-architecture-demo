// @flow
import { createSelector } from "reselect";
import { connect } from "react-redux";
import TodoListComponent from "../components/TodoListComponent";
import models from "../models";
const { TodoListModel, TodoListCollection } = models;
import { todoListsSelector, todoListIDSelector } from "../selectors";


const makeTodoListSelector = () => createSelector(
  todoListsSelector,
  todoListIDSelector,
  (todoLists, todoListID) => TodoListCollection.get(todoLists, todoListID),
);

const makeMapStateToProps = () => {
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
const TodoListContainer = connect(makeMapStateToProps())(TodoListComponent);

export default TodoListContainer;