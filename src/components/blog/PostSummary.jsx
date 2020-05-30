import React from 'react';
import InternalLink from '../typography/InternalLink';
import Tag from './Tag';

const PostSummary = ({ node }) => (
  <>
    <p className="text-xs">{node.frontmatter.date}</p>
    <InternalLink
      to={node.fields.url}
      className="leading-none inline-block text-lg mb-1"
    >
      {node.frontmatter.title}
    </InternalLink>
    {node.frontmatter.description && (
      <p className="mb-1">{node.frontmatter.description}</p>
    )}
    <div className="flex flex-row flex-wrap">
      {node.frontmatter.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  </>
);

export default PostSummary;
