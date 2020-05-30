import H5 from '../../typography/H5';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TimelineContent from '../TimelineContent';
import TimelineItem from '../TimelineItem';
import TimelineLogo from '../TimelineLogo';

const UD = () => {
  const data = useStaticQuery(graphql`
    query {
      ud: file(relativePath: { eq: "university_of_delaware.jpg" }) {
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
      <TimelineContent date="May 2016">
        <H5>Graduated from the University of Delaware</H5>
        <p>
          Graduated (cum laude) with bachelor of science degrees in{' '}
          <strong>geologoical science</strong> and{' '}
          <strong>environmental science</strong>.
        </p>
      </TimelineContent>
      <TimelineLogo img={data.ud} />
    </TimelineItem>
  );
};

export default UD;
