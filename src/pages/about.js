import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './about.module.css';

const About = ({ data }) => (
  <Layout>
    <SEO
      title="about"
      description="Jeremy Keeler is a senior software engineer, geologist, and outdoor enthusiast. He currently works at Affirm, created/maintains aoestats.io on his spare time, and constantly goes backpacking."
    />
    <h1>About</h1>

    <Img fluid={data.image.childImageSharp.fluid} className={styles.aboutImg} alt="Jeremy's Face" />

    <p>
      I'm Jeremy Keeler, currently a Senior Software Engineer at <a href="https://www.affirm.com/">Affirm</a>, on the
      Bank Engineering team. I help design, develop, and deliver various data pipelines for our investors and captial
      markets teams. I also focus on internal web applications for use by our business teams. We use Python on the
      backend and React on the frontend. Previously I was an Analyst and Fullstack Engineer at{' '}
      <a href="https://www.goldmansachs.com/">Goldman Sachs</a>, working in Private Wealth Management. In May 2016 I
      graduated from the <a href="https://www.udel.edu/">University of Delaware</a> with two Bachelor of Science
      degrees, in Geological Sciences and Environmental Sciences, and a minor in Computer Science
    </p>

    <p>
      While I am currently doing computer science, I also have a love for all things nature. During college, under the
      direction of <a href="http://www.ceoe.udel.edu/our-people/profiles/pizzuto">Dr. James Pizzuto</a>, I combined my
      computer science and geological sciences knowledge and created a fluvival sediment transport model that explicitly
      took into account long term storage of suspended sediment. I was fortunate enough to present{' '}
      <a target="_blank" href="/Keeler_agu_poster_FINAL.png">
        work
      </a>{' '}
      at the AGU Fall Conference in December 2015. This work also contributed to a{' '}
      <a href="http://geology.gsapubs.org/content/45/2/151.abstract">recent paper</a>, that I am co-author on, titled,
      "Storage Filters Upland Suspended Sediment Signals Delivered from Watersheds" by Dr. James Pizzuto.
    </p>

    <p>
      In the future, I hope to continue my work as a Software Engineer while maintaining my interest in the outdoors by
      going on weekend excursions and exploring nature. Down the line I anticipate going to graduate school to receive a
      master's degree, but in what field, I am not certain. I love learning new things, experimenting, and I hope to
      learn as much as possible as I progress through life.
    </p>
  </Layout>
);

export default About;

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
