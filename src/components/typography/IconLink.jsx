import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ to, icon }) => (
  <a href={to} rel="noopener noreferrer" className="hover:text-primary">
    <FontAwesomeIcon icon={icon} size="lg" />
  </a>
);

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default IconLink;
