import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

const LinkButton = ({ to, children, className }) => (
  <Link
    to={to}
    className={classnames(
      'bg-primary',
      'text-white',
      'px-4',
      'py-2',
      'rounded',
      'hover:bg-primary-dark',
      className,
    )}
  >
    {children}
  </Link>
);

export default LinkButton;
