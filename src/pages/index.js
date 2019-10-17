import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPost from '../components/blog/BlogPost';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO />

      <h1>Home</h1>

      <p>
        A corner of the cosmos for Jeremy Keeler, software engineer, geologist, and nature enthusiast. Prone to
        thoughts, ramblings, musings, and other writings. Topics: whatever is on my mind.
      </p>

      {posts.map(node => (
        <BlogPost post={node} key={node.fields.url} />
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
          html
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
