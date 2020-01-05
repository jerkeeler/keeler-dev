import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPost from '../components/blog/BlogPost';

import styles from './index.module.css';

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

      <div className={styles.morePostsContainer}>
        <Link to="/archive" className={styles.morePosts}>
          <button className="btn btn-primary">More Posts</button>
        </Link>
      </div>

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
      limit: 5
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
            date(formatString: "MMMM DD, YYYY")
            year: date(formatString: "YYYY")
            tags
          }
        }
      }
    }
  }
`;
