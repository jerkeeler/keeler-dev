import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ className = '', children }) => (
  <h3 className={`heading-3 ${className}`}>{children}</h3>
);

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H3;
