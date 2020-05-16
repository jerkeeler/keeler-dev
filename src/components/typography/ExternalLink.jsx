import React from 'react';

const ExternalLink = ({ to, children }) => (
  <a href={to} rel="noopener noreferrer" className="link">
    {children}
  </a>
);

export default ExternalLink;
