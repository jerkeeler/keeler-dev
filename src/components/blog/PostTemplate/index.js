import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layout';
import SEO from '../../seo';

import styles from './styles.module.css';

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article>
        <h1 className={styles.postTitle}>{frontmatter.title}</h1>
        <span className={styles.postDate}>{frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
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
        date(formatString: "MMMM DD, YYYY")
        description
        title
      }
    }
  }
`;

export default Template;
