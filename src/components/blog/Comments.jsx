import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

const Comments = ({ url, identifier, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const fullUrl = `${data.site.siteMetadata.siteUrl}${url}`;
  return (
    <div className="mt-3">
      <DiscussionEmbed
        shortname="keeler-dev"
        config={{
          url: fullUrl,
          identifier,
          title,
          language: 'en_US',
        }}
      />
    </div>
  );
};
export default Comments;
