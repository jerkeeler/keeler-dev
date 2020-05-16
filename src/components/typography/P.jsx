import React from 'react';
import PropTypes from 'prop-types';

const P = ({ className = '', children }) => (
  <p className={`paragraph ${className}`}>{children}</p>
);

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default P;
