import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const Tag = ({ tag, className }) => (
  <Link
    to={`/tags/${tag}`}
    className={classnames(
      'text-sm',
      'mr-2',
      'first:ml-0',
      'mt-1',
      'py-1',
      'px-2',
      'bg-gray-200',
      'rounded',
      'hover:bg-gray-300',
      className,
    )}
  >
    #{tag}
  </Link>
);

export default Tag;
