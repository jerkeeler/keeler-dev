import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const H1 = ({ className, children }) => (
  <h1 className={classnames('heading-1', className)}>{children}</h1>
);

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H1;
