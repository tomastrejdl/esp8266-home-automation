import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__icons">
          <i className="material-icons navbar__icons__icon-cw">settings</i>
          <i className="material-icons navbar__icons__icon-ccw">settings</i>
        </div>
        <h1 className="navbar__title">
          ESP8266 Home Automation{" "}
          <span className="navbar__title__version">preALPHA</span>
        </h1>
      </div>
    );
  }
}
