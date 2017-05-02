import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoContainer from "../containers/TodoContainer";

import * as models from "../models";

export default class TodoFormComponent extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  }

  resetState = () => {
    this.setState({
      date: "",
      description: "",
      name: "",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, date } = this.state;
    this.props.addTodo(name, description, date);
    this.resetState();
  };

  render() {
    return (<form className="TodoForm" onSubmit={this.handleSubmit}>
      <h3 className="TodoForm__header">Add Todo</h3>

      <div className="TodoForm__input-group">
        <label className="TodoForm__label" htmlFor="TodoForm__name">Name</label>
        <input id="TodoForm__name" className="TodoForm__name" type="text" value={this.state.name} onChange={this.handleNameChange} />
      </div>

      <div className="TodoForm__input-group">
        <label className="TodoForm__label" htmlFor="TodoForm__description">Description</label>
        <input id="TodoForm__description" className="TodoForm__description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
      </div>

      <div className="TodoForm__input-group">
        <label className="TodoForm__label" htmlFor="TodoForm__date">Date</label>
        <input id="TodoForm__date" className="TodoForm__date" type="date" value={this.state.date} onChange={this.handleDateChange} />
      </div>

      <input type="submit" value="Add Todo" />
    </form>);
  }
}
