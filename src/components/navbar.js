import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.css';

const Navbar = () => (
  <nav>
    <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/blog/">Blog</Link></li>
        <li className={styles.navItem}><Link to="/about/">About</Link></li>
        <li className={styles.navItem}><Link to="/projects/">Projects</Link></li>
        <li className={styles.navItem}><Link to="/experiments/">Experiments</Link></li>
        <li className={styles.navItem}><Link to="/contact/">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
