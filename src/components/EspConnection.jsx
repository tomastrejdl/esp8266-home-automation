import React, { Component } from "react";

export default class EspConnection extends Component {
  render() {
    return (
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            className="mdl-textfield__input"
            type="text"
            id="esp_ip"
            defaultValue="192.168.0.105"
          />
          <label className="mdl-textfield__label" htmlFor="esp_ip">
            ESP IP
          </label>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
          onClick={this.props.handleConnectClick}
        >
          Connect
        </button>
      </div>
    );
  }
}
