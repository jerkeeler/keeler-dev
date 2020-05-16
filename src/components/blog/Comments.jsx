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
    <DiscussionEmbed
      shortname="keeler.dev"
      config={{
        url: fullUrl,
        identifier,
        title,
        language: 'en_US',
      }}
    />
  );
};
export default Comments;
