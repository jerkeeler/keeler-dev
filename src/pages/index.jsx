import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/typography/H1';
import { graphql } from 'gatsby';
import Post from '../components/blog/Post';
import HR from '../components/typography/HR';
import LinkButton from '../components/LinkButton';

const Item = ({ children, url }) => (
  <div className="mb-6">
    <HR />
    {children}
    <div className="flex justify-center mt-6">
      <LinkButton to={url}>Read More</LinkButton>
    </div>
  </div>
);

const Index = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <Layout>
      <SEO />
      <H1>keeler.dev</H1>
      <p>
        A corner of the cosmos for Jeremy Keeler, software engineer, geologist,
        and nature enthusiast. Prone to thoughts, ramblings, musings, and other
        writings. Topics: whatever is on my mind.
      </p>
      <p className="mt-4">Recent Posts:</p>
      {allMarkdownRemark.nodes.map(
        ({ excerpt, frontmatter, fields: { url } }) => (
          <Item key={url} url={url}>
            <Post frontmatter={frontmatter} html={excerpt} url={url} />
          </Item>
        ),
      )}
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(format: HTML, pruneLength: 500)
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
`;
