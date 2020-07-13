import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import H2 from '../typography/H2';
import H4 from '../typography/H4';
import H5 from '../typography/H5';
import ExternalLink from '../typography/ExternalLink';
import TimelineContent from './TimelineContent';
import TimelineItem from './TimelineItem';
import UD from './items/UD';
import CultureIQ from './items/CultureIQ';
import Goldman from './items/Goldman';
import Affirm from './items/Affirm';
import TimelineLogo from './TimelineLogo';

const TimelineYear = ({ children }) => (
  <h4 className="font-bold text-xl mt-8">{children}</h4>
);

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query {
      umich: file(relativePath: { eq: "university_of_michigan.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <H2>Timeline</H2>

      <H4>2020</H4>

      <TimelineItem>
        <TimelineContent date="August 2020">
          <H5 className="italic">
            Started my Ph.D. program at the{' '}
            <ExternalLink to="https://umich.edu">
              University of Michigan
            </ExternalLink>
          </H5>
          <p>
            I started researching earth's past climate (paleoclimatology) using
            global climate models (GCMs). My first project invovles exploring
            the equilibrium climate sensitivy. In addition, I am taking classes
            and doing literature review to fill in gaps in my knowledge and to
            get up to speed on the latest research.
          </p>
        </TimelineContent>
        <TimelineLogo img={data.umich} />
      </TimelineItem>

      <TimelineYear>2019</TimelineYear>

      <Affirm />

      <TimelineYear>2018</TimelineYear>

      <TimelineContent date="June 2018 - September 2019">
        <H5 className="italic">Software Engineer at Affirm</H5>
        <p>
          I worked on the Funding Engineering team at{' '}
          <ExternalLink to="https://affirm.com">Affirm</ExternalLink>. I
          designed and implemented big data pipelines using Spark and Python to
          ensure that Affirm could finance loans through institutional investors
          in a timely and performant manner.
        </p>
      </TimelineContent>

      <TimelineYear>2017</TimelineYear>

      <Goldman />

      <TimelineItem>
        <TimelineContent date="February 2017">
          <H5 className="italic">Co-authored my first scientific paper</H5>
          <p>
            "Storage filters upland suspended sediment signals delivered from
            watersheds"
            <br />
            <em>Geology</em>
            <br />
            <ExternalLink to="https://pubs.geoscienceworld.org/gsa/geology/article-abstract/45/2/151/195242/Storage-filters-upland-suspended-sediment-signals?redirectedFrom=fulltext">
              https://doi.org/10.1130/G38170.1
            </ExternalLink>
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineYear>2016</TimelineYear>

      <CultureIQ />
      <UD />
    </div>
  );
};

export default Timeline;
