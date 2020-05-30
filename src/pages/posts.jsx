import React from 'react';
import { graphql } from 'gatsby';

import H1 from '../components/typography/H1';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ArchiveList from '../components/blog/ArchiveList';
import ExternalLink from '../components/typography/ExternalLink';
import P from '../components/typography/P';

const Posts = ({ data }) => {
  const years = {};
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!years[node.frontmatter.year]) years[node.frontmatter.year] = [];
    years[node.frontmatter.year].push(node);
  });
  return (
    <Layout>
      <SEO title="Posts" description="Posts of all of Jeremy's blog posts" />
      <H1>Posts</H1>
      <P>
        Jeremy writes blog posts about a variety of topics. Common topics
        include: paleoclimatology, geology, software engineering, video games,
        and board games. Most of the posts are to help his own edification. To
        practice synthesizing, writing, and communicating science.
      </P>
      {Object.keys(years)
        .sort()
        .reverse()
        .map((year) => (
          <ArchiveList key={year} year={year} nodes={years[year]} />
        ))}
      <p className="mt-4">
        <ExternalLink to="/rss.xml">RSS Feed</ExternalLink>
      </p>
    </Layout>
  );
};

export default Posts;

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
