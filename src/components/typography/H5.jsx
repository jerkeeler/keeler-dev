import React from 'react';
import classnames from 'classnames';

const H5 = ({ children, className }) => (
  <h5 className={classnames('heading-5', className)}>{children}</h5>
);

export default H5;
