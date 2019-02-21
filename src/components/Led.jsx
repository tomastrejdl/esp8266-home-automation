import React, { Component } from "react";

export default class Led extends Component {
  render() {
    return (
      <div className="led">
        <label
          className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
          htmlFor={this.props.led.id}
        >
          <input
            type="checkbox"
            id={this.props.led.id}
            className="mdl-switch__input"
            defaultChecked={this.props.led.value === 1 ? true : false}
            onChange={this.props.handleLedSwitchToggle}
          />
          <span className="mdl-switch__label">{this.props.led.name}</span>
        </label>
      </div>
    );
  }
}
