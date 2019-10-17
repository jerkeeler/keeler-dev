import React from 'react';
import { graphql } from 'gatsby';

import YearList from '../../components/blog/YearList';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const years = {};
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!years[node.frontmatter.year]) years[node.frontmatter.year] = [];
    years[node.frontmatter.year].push(node);
  });
  return (
    <Layout>
      <SEO title={tag} description={`All posts relating to ${tag} topic`} />
      <h1>{tag} ({totalCount})</h1>
      {Object.keys(years)
        .sort()
        .reverse()
        .map(year => (
          <YearList key={year} year={year} nodes={years[year]} />
        ))}
    </Layout>
  )
};

export default Tag;

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 20000
      filter: { frontmatter: { draft: { ne: true }, tags: { in: [ $tag ] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
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
