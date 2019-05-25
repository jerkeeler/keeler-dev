import React from 'react';
import { Link } from 'gatsby';

import styles from './link.module.css';

const HomepageLink = ({ children, to }) => (
  <div className={styles.mainLinkBg}>
    <span className={styles.mainBgSlider} />
    <Link to={to} className={styles.mainLink}>{children}</Link>
  </div>
);

export default HomepageLink;
