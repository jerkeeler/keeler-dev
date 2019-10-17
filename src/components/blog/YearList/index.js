import React from 'react';

import PostListItem from '../PostListItem';

import styles from './year-list.module.css';

const YearList = ({ year, nodes }) => (
  <>
    <h4 className={styles.year}>{year}</h4>

    <ul className={styles.postList}>
      {nodes.map((node) => (
        <PostListItem key={node.fields.url} node={node} />
      ))}
    </ul>
  </>
);

export default YearList;
