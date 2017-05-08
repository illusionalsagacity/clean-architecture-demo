import React, { Component } from "react";
import PropTypes from "prop-types";


export default class TodoComponent extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  };

  render() {
    const { description, name, userName, date } = this.props;
    return (<div className="Todo pt-card pt-elevation-1">
      <h5 className="Todo__header">{name} - {userName} - {date}</h5>
      <div className="Todo__container">
        <span className="Todo__description">{description}</span>
      </div>
    </div>);
  }
}
