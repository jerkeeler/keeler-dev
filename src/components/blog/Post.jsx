import React, { useState } from 'react';
import { Link } from 'gatsby';

import H2 from '../typography/H2';
import Tag from './Tag';
import Comments from './Comments';

const CommentButton = ({ allowComments, onClick, showComments }) => {
  if (!allowComments) return null;

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="border border-gray-300 py-4 px-8 shadow-sm"
      >
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
    </div>
  );
};

const Post = ({ frontmatter, html, url, allowComments = true }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <article className="shadow-lg py-6 px-3 border border-gray-200">
      <Link to={url} className="hover:cursor-pointer">
        <H2>{frontmatter.title}</H2>
      </Link>
      <p className="mb-1 text-gray-700">{frontmatter.date}</p>
      <div className="leading-none flex flex-row flex-wrap">
        {frontmatter.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />

      <CommentButton
        allowComments={allowComments}
        onClick={() => setShowComments(!showComments)}
        showComments={showComments}
      />
      {showComments && (
        <Comments
          url={url}
          title={frontmatter.title}
          identifier={frontmatter.path}
        />
      )}
    </article>
  );
};

export default Post;
