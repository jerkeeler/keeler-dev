import React from 'react';

import styles from './footer.module.css';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <hr />
    <p className="text-center">&copy; Jeremy Keeler 2018 - <span id="copyrightYear">{year}</span></p>
  </footer>
);

export default Footer;
