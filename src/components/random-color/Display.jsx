import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgColor }) => {
  return <div style={{ background: bgColor, width: '250px', height: '250px' }}>
    hello
  </div>;
};

Display.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Display;
