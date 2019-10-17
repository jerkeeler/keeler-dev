import React from 'react';
import { Link } from 'gatsby';

import styles from  './styles.module.css';

const Tag = ({ tag }) => (
  <Link to="/" className={styles.tag}>#{tag}</Link>
);

export default Tag;
