import React from 'react';
import { Link } from 'gatsby';

import Tag from '../Tag';

import styles from './styles.module.css';

const BlogPost = ({ post }) => (
  <article key={post.fields.url} className={styles.blogPost}>
    <Link to={post.fields.url}><h3 className={styles.postTitle}>{post.frontmatter.title}</h3></Link>
    <span className={styles.postDate}>{post.frontmatter.date}</span>
    {post.frontmatter.tags.map(tag => <Tag tag={tag} />)}
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </article>
);

export default BlogPost;
