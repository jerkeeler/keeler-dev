import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <h1>Home</h1>

    <p>
      Home to Jeremy K, software engineer, geologist, and outdoor enthusiast.
      Prone to thoughts, rambles, musings, and other writings.
    </p>

    <h4>2019</h4>

    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.frontmatter.path}>
          <Link to={node.frontmatter.path}>{node.frontmatter.date} - {node.frontmatter.title}</Link>
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
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;
