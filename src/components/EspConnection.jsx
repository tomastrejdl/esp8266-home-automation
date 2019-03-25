import React from 'react';
import PropTypes from 'prop-types';

const EspConnection = (props) => {
  const { onEspIpChange, handleConnectClick, espIpDefaultValue } = props;
  return (
    <div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="text"
          id="esp_ip"
          defaultValue={espIpDefaultValue}
          onChange={onEspIpChange}
        />
        <label className="mdl-textfield__label" htmlFor="esp_ip">
          ESP IP
        </label>
      </div>
      <button
        type="button"
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
        onClick={handleConnectClick}
      >
        Connect
      </button>
    </div>
  );
};

EspConnection.propTypes = {
  onEspIpChange: PropTypes.func.isRequired,
  handleConnectClick: PropTypes.func.isRequired,
  espIpDefaultValue: PropTypes.string.isRequired,
};

export default EspConnection;
