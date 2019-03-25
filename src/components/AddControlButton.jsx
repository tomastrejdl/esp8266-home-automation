import React, { Component } from "react";

export default class AddControlButton extends Component {
  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-control-button"
        onClick={this.props.handleConnectClick}
      >
        <i className="material-icons">add</i>
      </button>
    );
  }
}
