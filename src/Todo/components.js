"use strict";

import React, { Component, PropTypes } from "react";
import { TodoContainer } from "./containers";

import * as models from "./models";

export class TodoComponent extends Component {
  render() {
    return (<div className="todo">
      <h3 className="todo__header">{this.props.name}</h3>
      <div className="todo__container">
        <span className="todo__description">{this.props.description}</span>
      </div>
    </div>);
  }
}

export class TodoListComponent extends Component {
  static propTypes = {
    todoIDs: PropTypes.array.isRequired,
  };

  render() {
    return (<div className="todoList">
      { this.props.todoIDs ? this.props.todoIDs.map( todoID => <TodoContainer id={todoID} /> ) : null }
    </div>);
  }
}
