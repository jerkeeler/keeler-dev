import React from 'react';

import PostSummary from './PostSummary';

const ArchiveItem = ({ node }) => (
  <li className="mt-2 first:mt-0">
    <PostSummary node={node} />
  </li>
);

export default ArchiveItem;
