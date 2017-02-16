"use strict";

import React, { Component, PropTypes } from "react";
import { TodoContainer } from "./containers";

import * as models from "./models";

export class TodoComponent extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  };

  render() {
    const { description, name, userName } = this.props;
    return (<div className="todo">
      <h3 className="todo__header">{name} - {userName}</h3>
      <div className="todo__container">
        <span className="todo__description">{description}</span>
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
