import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import H1 from '../components/typography/H1';
import SEO from '../components/SEO';
import Resume from '../components/resume/Resume';
import ExternalLink from '../components/typography/ExternalLink';
import P from '../components/typography/P';

const About = ({ data }) => (
  <Layout>
    <SEO
      title="about"
      description="Jeremy Keeler is a senior software engineer, geologist, and outdoor enthusiast. He currently works at Affirm, created/maintains aoestats.io on his spare time, and constantly goes backpacking."
    />

    <H1>About</H1>

    <div
      className="mb-6 grid md:grid-flow-col grid-flow-row"
      style={{ justifyItems: 'center' }}
    >
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Jeremy's Face"
        className="w-32 h-32 rounded-full mr-0 md:mr-12 mt-0 mb-3 md:mb-0"
      />

      <div>
        <P>
          Jeremy Keeler is currently a Senior Software Engineer at{' '}
          <ExternalLink to="https://www.affirm.com/">Affirm</ExternalLink> on
          the Capital Engineering team. I help design, develop, and deliver
          various data pipelines for our investors and captial markets teams. I
          also focus on internal web applications for use by our business teams.
        </P>

        <P>
          Jeremy will be attending the{' '}
          <ExternalLink to="https://umich.edu">
            University of Michigan
          </ExternalLink>{' '}
          in the Fall to pursue a Ph.D. from the{' '}
          <ExternalLink to="https://lsa.umich.edu/earth">
            Department of Earth and Environmental Sciences
          </ExternalLink>
          . Jeremy will be part of Chris Poulsen's{' '}
          <ExternalLink to="https://www.umclimate.com">
            Climate Change Research Group
          </ExternalLink>{' '}
          where he will be investigating the equilibrium climate sensitivity of
          past and current climates using computer simulations.
        </P>
      </div>
    </div>
    <Resume />
  </Layout>
);

export const query = graphql`
  query {
    image: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
