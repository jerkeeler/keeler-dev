import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.css';
import image from '../images/minimal_j.svg';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" className={styles.logoLink}>
      <img src={image} alt="A geometric, minimal version of the J character" className={styles.logo} />
    </Link>
    <ul className={styles.navList}>
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
      <li className={styles.navItem}>
        <Link to="/archive/" className={styles.navLink}>
          Archive
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
