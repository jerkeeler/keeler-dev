import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import H5 from '../../typography/H5';
import TimelineItem from '../TimelineItem';
import TimelineContent from '../TimelineContent';
import TimelineLogo from '../TimelineLogo';
import ExternalLink from '../../typography/ExternalLink';

const Goldman = () => {
  const data = useStaticQuery(graphql`
    query {
      goldman: file(relativePath: { eq: "goldman_sachs.png" }) {
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
      <TimelineContent date="August 2017 - June 2018">
        <H5>Technology Analyst at Goldman Sachs</H5>
        <p>
          I worked in the Private Wealth Management (PWM) portion of{' '}
          <ExternalLink to="https://www.goldmansachs.com/">
            Goldman Sachs
          </ExternalLink>
          . I worked on a trading floor, alongside traders, creating a web
          application to automatically handle 10b5-1 plans. I used AngularJS and
          Java Spring.
        </p>
      </TimelineContent>
      <TimelineLogo img={data.goldman} />
    </TimelineItem>
  );
};

export default Goldman;
