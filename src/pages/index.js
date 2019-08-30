import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import YearList from '../components/blog/year-list';

const IndexPage = ({ data }) => {
  const years = {};
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!years[node.frontmatter.year]) years[node.frontmatter.year] = [];
    years[node.frontmatter.year].push(node);
  });

  return (
    <Layout>
      <SEO />

      <h1>Home</h1>

      <p>
        A corner of the cosmos for Jeremy Keeler, software engineer, geologist, and nature enthusiast. Prone to
        thoughts, ramblings, musings, and other writings. Topics: whatever is on my mind.
      </p>

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

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
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
          }
        }
      }
    }
  }
`;
