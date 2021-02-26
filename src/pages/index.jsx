import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/typography/H1';
import { graphql } from 'gatsby';
import P from '../components/typography/P';
import Img from 'gatsby-image';
import Timeline from '../components/Timeline';
import RecentPosts from '../components/RecentPosts';
import Projects from '../components/Projects';
import ExternalLink from '../components/typography/ExternalLink';

const Section = ({ children }) => <div className="mt-20">{children}</div>;

const Index = ({ data }) => (
  <Layout>
    <SEO />
    <H1>Hi, I'm Jeremy Keeler</H1>
    <div
      className="mb-6 grid md:grid-flow-col grid-flow-row"
      style={{ justifyItems: 'center' }}
    >
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Jeremy's Face"
        className="w-40 h-40 rounded-full mr-0 md:mr-12 mt-0 mb-3 md:mb-0"
      />
      <div>
        <P>
          I am a <em>paleoclimatologist</em>, <em>software engineer</em>, and{' '}
          <em>adventurer</em>. I am currently living in Ann Arbor, Michigan and
          pursuing my Ph.D. in paleoclimatology at the{' '}
          <ExternalLink to="https://umich.edu">
            University of Michigan
          </ExternalLink>
          .
        </P>
        <P>
          This is my corner of the cosmos. Filled with my posts, thoughts, and
          learnings on a variety of topics &mdash; paleoclimatology, software
          engineering, geology, videos games, board games.
        </P>
      </div>
    </div>
    <Section>
      <RecentPosts />
    </Section>
    <Section>
      <Projects />
    </Section>
    <Section>
      <Timeline />
    </Section>
  </Layout>
);

export default Index;

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
