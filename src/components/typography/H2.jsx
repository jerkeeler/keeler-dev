import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const H2 = ({ className = '', children }) => (
  <h2 className={classnames('heading-2', className)}>{children}</h2>
);

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H2;
