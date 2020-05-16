import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';

const InternalLink = ({ to, children, className }) => (
  <Link to={to} className={classnames('link', className)}>
    {children}
  </Link>
);

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InternalLink;
