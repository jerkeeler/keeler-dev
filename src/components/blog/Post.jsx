import React from 'react';
import { Link } from 'gatsby';

import H2 from '../typography/H2';
import Tag from './Tag';

const Post = ({ frontmatter, html, url }) => (
  <article className="shadow-lg py-6 px-3 border border-gray-200">
    <Link to={url} className="hover:cursor-pointer">
      <H2>{frontmatter.title}</H2>
    </Link>
    <p className="leading-none text-gray-700">{frontmatter.date}</p>
    <div className="leading-none">
      {frontmatter.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
);

export default Post;
