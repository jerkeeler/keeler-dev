import React from 'react';
import { Link } from 'gatsby';
import Tag from './Tag';

const ArchiveItem = ({ node }) => (
  <li className="mt-4 first:mt-0 leading-none">
    <Link to={node.fields.url}>
      {node.frontmatter.date} - {node.frontmatter.title}
    </Link>
    <p>
      {node.frontmatter.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </p>
  </li>
);

export default ArchiveItem;
