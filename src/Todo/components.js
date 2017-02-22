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
      { this.props.todoIDs ? this.props.todoIDs.map( todoID => <TodoContainer todoID={todoID} /> ) : null }
    </div>);
  }
}

export class TodoFormComponent extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    this.props.addTodo(name, description);
    this.setState({
      description: "",
      name: "",
    });
  };

  render() {
    return (<form className="TodoForm" onSubmit={this.handleSubmit}>
      <input className="TodoForm__name" type="text" value={this.state.name} onChange={this.handleNameChange} />
      <input className="TodoForm__description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
      <input type="submit" value="Add Todo" />
    </form>);
  }
}
