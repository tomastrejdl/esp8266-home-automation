import React from 'react';
import PropTypes from 'prop-types';

const AddControlButton = (props) => {
  const { handleConnectClick } = props;
  return (
    <button
      type="button"
      className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-control-button"
      onClick={handleConnectClick}
    >
      <i className="material-icons">add</i>
    </button>
  );
};

AddControlButton.propTypes = {
  handleConnectClick: PropTypes.func.isRequired,
};

export default AddControlButton;
