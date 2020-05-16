import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import H1 from '../components/typography/H1';
import SEO from '../components/SEO';
import Resume from '../components/resume/Resume';

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

      <p>
        I'm Jeremy Keeler, currently a Senior Software Engineer at{' '}
        <a href="https://www.affirm.com/">Affirm</a> on the Bank Engineering
        team. I help design, develop, and deliver various data pipelines for our
        investors and captial markets teams. I also focus on internal web
        applications for use by our business teams.
      </p>
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
