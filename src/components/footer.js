import React from 'react';

import styles from './footer.module.css';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <hr />
    <p className="text-center">
      &copy; Jeremy Keeler 2018 - <span id="copyrightYear">{year}</span>
    </p>
    <p className="text-center" />
    <p className="text-center">
      <a href="mailto:jerkeeler@gmail.com">Contact Me</a> | <a href="https://twitter.com/jerkeeler">Twitter</a> |{' '}
      <a href="https://github.com/jerkeeler">GitHub</a> |{' '}
      <a href="https://www.linkedin.com/in/jeremy-keeler-74567891/">LinkedIn</a>
    </p>
  </footer>
);

export default Footer;
