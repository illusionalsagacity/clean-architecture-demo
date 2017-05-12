import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoContainer from "../containers/TodoContainer";


export default class TodoListComponent extends Component {
  static propTypes = {
    todoIDs: PropTypes.array.isRequired,
  };

  render() {
    return (<div className="TodoList">
      <h5>Todo List</h5>
      { this.props.todoIDs ? this.props.todoIDs.map(todoID => <TodoContainer key={todoID} todoID={todoID} />) : null }
    </div>);
  }
}
