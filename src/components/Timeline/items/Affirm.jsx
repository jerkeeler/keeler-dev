import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import H5 from '../../typography/H5';
import TimelineContent from '../TimelineContent';
import TimelineItem from '../TimelineItem';
import TimelineLogo from '../TimelineLogo';
import ExternalLink from '../../typography/ExternalLink';

const Affirm = () => {
  const data = useStaticQuery(graphql`
    query {
      affirm: file(relativePath: { eq: "affirm.png" }) {
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
      <TimelineContent date="September 2019 - July 2020">
        <H5>Senior Software Engineer at Affirm</H5>
        <p>
          I worked on the Capital Engineering team at{' '}
          <ExternalLink to="https://affirm.com">Affirm</ExternalLink>, designing
          and implementing an internal order management system. I helped
          modularize various sub-systems and designed robust APIs between teams
          to enable flexibility and better separation of concerns.
        </p>
      </TimelineContent>
      <TimelineLogo img={data.affirm} />
    </TimelineItem>
  );
};

export default Affirm;
