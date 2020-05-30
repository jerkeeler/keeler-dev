import React from 'react';
import Img from 'gatsby-image';

const TimelineLogo = ({ img }) => (
  <div className="w-16 h-16 ml-3 pl-3">
    <Img
      className="w-16 h-16"
      fluid={img.childImageSharp.fluid}
      alt="project logo"
    />
  </div>
);

export default TimelineLogo;
