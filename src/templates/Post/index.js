import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Tag from '../../components/blog/Tag';

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
        {frontmatter.tags.map(tag => <Tag tag={tag} />)}
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
        tags
      }
    }
  }
`;

export default Template;
