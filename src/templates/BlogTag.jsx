import React from 'react';
import { graphql } from 'gatsby';

// import ArchiveList from '../../components/blog/ArchiveList';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/typography/H1';

import ArchiveList from '../components/blog/ArchiveList';

const BlogTag = ({ pageContext, data }) => {
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
      <H1>
        {tag} ({totalCount})
      </H1>
      {Object.keys(years)
        .sort()
        .reverse()
        .map((year) => (
          <ArchiveList key={year} year={year} nodes={years[year]} />
        ))}
    </Layout>
  );
};

export default BlogTag;

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 20000
      filter: { frontmatter: { draft: { ne: true }, tags: { in: [$tag] } } }
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
