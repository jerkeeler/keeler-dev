import React from 'react';

import { Link } from 'gatsby';

const PostListItem = ({ node }) => (
  <li>
    <Link to={node.fields.url}>
      {node.frontmatter.date} - {node.frontmatter.title}
    </Link>
  </li>
);

export default PostListItem;
