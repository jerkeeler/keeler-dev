import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import H5 from '../../typography/H5';
import TimelineContent from '../TimelineContent';
import TimelineItem from '../TimelineItem';
import TimelineLogo from '../TimelineLogo';
import ExternalLink from '../../typography/ExternalLink';

const CultureIQ = () => {
  const data = useStaticQuery(graphql`
    query {
      culture_iq: file(relativePath: { eq: "culture_iq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <TimelineItem>
      <TimelineContent date="August 2016 - August 2017">
        <H5>Fullstack Developer at CultureIQ</H5>
        <p>
          I worked at{' '}
          <ExternalLink to="https://cultureiq.com/">CultureIQ</ExternalLink> as
          a fullstack developer. I got to work on a large scale Django
          application with an AngularJS frontend. One project I enjoyed was
          creating a linear regression tool (frontend and backend) to help
          clients analyze the important factors in their company culture.
        </p>
      </TimelineContent>
      <TimelineLogo img={data.culture_iq} />
    </TimelineItem>
  );
};

export default CultureIQ;
