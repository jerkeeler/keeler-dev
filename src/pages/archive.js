import React from 'react';
import { graphql } from 'gatsby';

import YearList from '../components/blog/YearList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Archive = ({ data }) => {
  const years = {};
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!years[node.frontmatter.year]) years[node.frontmatter.year] = [];
    years[node.frontmatter.year].push(node);
  });
  return (
    <Layout>
      <SEO title="archive" description="Archive of all of Jeremy's blog posts" />
      <h1>Post Archive</h1>
      {Object.keys(years)
        .sort()
        .reverse()
        .map(year => (
          <YearList key={year} year={year} nodes={years[year]} />
        ))}
      <p>
        <a href="/rss.xml">RSS Feed</a>
      </p>
    </Layout>
  );
};

export default Archive;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 20000
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            url
          }
          frontmatter {
            title
            date(formatString: "MMMM DD")
            year: date(formatString: "YYYY")
            tags
          }
        }
      }
    }
  }
`;
