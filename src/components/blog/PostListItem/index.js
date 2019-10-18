import React from 'react';
import { Link } from 'gatsby';

import Tag from '../Tag';

import styles from './styles.module.css';

const PostListItem = ({ node }) => (
  <li className={styles.postList}>
    <Link to={node.fields.url} className={styles.link}>
      {node.frontmatter.date} - {node.frontmatter.title}
    </Link>
    <p className={styles.tags}>
      {node.frontmatter.tags.map(tag => <Tag className={styles.tag} tag={tag} />)}
    </p>
  </li>
);

export default PostListItem;
