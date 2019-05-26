import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.css';

const Navbar = () => (
  <nav>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/now/" className={styles.navLink}>
          Now
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/about/" className={styles.navLink}>
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/projects/" className={styles.navLink}>
          Projects
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
