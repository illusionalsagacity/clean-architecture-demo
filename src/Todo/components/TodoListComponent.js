import React, { Component, PropTypes } from "react";
import TodoContainer from "../containers/TodoContainer";


export default class TodoListComponent extends Component {
  static propTypes = {
    todoIDs: PropTypes.array.isRequired,
  };

  render() {
    return (<div className="todoList">
      { this.props.todoIDs ? this.props.todoIDs.map( todoID => <TodoContainer key={todoID} todoID={todoID} /> ) : null }
    </div>);
  }
}
