import React from 'react';
import classnames from 'classnames';

import InternalLink from '../typography/InternalLink';

const Tag = ({ tag, className }) => (
  <InternalLink
    to={`/tags/${tag}`}
    className={classnames(
      'text-sm',
      'ml-2',
      'first:ml-0',
      'text-gray-700',
      className,
    )}
  >
    #{tag}
  </InternalLink>
);

export default Tag;
