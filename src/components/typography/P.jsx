import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const P = ({ className, children }) => (
  <p className={classnames('paragraph', className)}>{children}</p>
);

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default P;
