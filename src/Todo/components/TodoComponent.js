import React, { Component, PropTypes } from "react";


export default class TodoComponent extends Component {
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
