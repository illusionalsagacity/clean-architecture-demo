import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoContainer from "../containers/TodoContainer";
import { Button } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import moment from "moment";

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

  handleDateChange = (date) => {
    this.setState({ date });
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
    this.props.addTodo(name, description, moment(date).format("MMM Do YY"));
    this.resetState();
  };

  render() {
    return (<form className="TodoForm" onSubmit={this.handleSubmit}>
      <h5 className="TodoForm__header">Add Todo</h5>


      <div className="pt-form-group TodoForm__name-group">
        <label className="pt-label" htmlFor="TodoForm__name">Name</label>
        <div className="pt-form-content">
          <input id="TodoForm__name" className="pt-input pt-fill TodoForm__name" type="text" value={this.state.name} onChange={this.handleNameChange} />
        </div>
      </div>

      <div className="pt-form-group TodoForm__description-group">
        <label className="pt-label" htmlFor="TodoForm__description">Description</label>
        <div className="pt-form-content">
          <input id="TodoForm__description" className="pt-input pt-fill TodoForm__description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </div>
      </div>

      <div className="pt-form-group TodoForm__date-group">
        <label className="pt-label" htmlFor="TodoForm__date">Date</label>
        <div className="pt-form-content">
          <DateInput className="pt-fill" inputProps={{ className: "pt-fill" }} value={this.state.date} onChange={this.handleDateChange.bind(this)} format="MMM Do YY" />
        </div>
      </div>

      <Button type="submit" intent="primary" onClick={this.handleSubmit} text="Add Todo" />
    </form>);
  }
}
