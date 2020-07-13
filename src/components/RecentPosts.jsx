import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PostSummary from './blog/PostSummary';
import H2 from './typography/H2';
import HR from './typography/HR';

const RecentItem = ({ node, idx }) => (
  <div className="mt-6 first:mt-0">
    {idx !== 0 && <HR />}
    <PostSummary node={node} />
  </div>
);

const RecentPosts = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 4
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          fields {
            url
          }
          html
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            year: date(formatString: "YYYY")
            tags
            description
          }
        }
      }
    }
  `);

  return (
    <div>
      <H2>Recent Posts</H2>
      {nodes.map((node, idx) => (
        <RecentItem key={node.fields.url} node={node} idx={idx} />
      ))}
    </div>
  );
};

export default RecentPosts;
