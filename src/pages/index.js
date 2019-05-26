import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './index.module.css';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <h1>Home</h1>

    <p>
      A corner of the cosmos for Jeremy Keeler, software engineer, geologist, and outdoor enthusiast. Prone to thoughts, ramblings,
      musings, and other writings.
    </p>

    <h4 className={styles.year}>2019</h4>

    <ul className={styles.postList}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.frontmatter.path}>
          <Link to={node.frontmatter.path}>
            {node.frontmatter.date} - {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD")
          }
        }
      }
    }
  }
`;
