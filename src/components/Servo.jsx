import React, { Component } from "react";

export default class Servo extends Component {
  render() {
    return (
      <div className="servo">
        <label htmlFor={this.props.servo.id}>{this.props.servo.name}</label>
        <input
          id={this.props.servo.id}
          className="mdl-slider mdl-js-slider"
          type="range"
          min="10"
          max="170"
          tabIndex="0"
          defaultValue={this.props.servo.value}
          onMouseUp={this.props.handleServoAngleChange}
          onTouchEnd={this.props.handleServoAngleChange}
        />
      </div>
    );
  }
}
