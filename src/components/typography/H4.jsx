import React from 'react';
import classnames from 'classnames';

const H4 = ({ children, className }) => (
  <h4 className={classnames('heading-4', className)}>{children}</h4>
);

export default H4;
