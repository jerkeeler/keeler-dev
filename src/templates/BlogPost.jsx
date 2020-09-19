import React from 'react';
import { graphql } from 'gatsby';
import 'gatsby-remark-mathjax-ssr/mathjax.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/blog/Post';

function BlogPost({ data }) {
  const { markdownRemark } = data;
  const {
    frontmatter,
    html,
    fields: { url },
  } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Post frontmatter={frontmatter} html={html} url={url} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { url: { eq: $path } }) {
      html
      fields {
        url
      }
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        description
        title
        tags
      }
    }
  }
`;

export default BlogPost;
