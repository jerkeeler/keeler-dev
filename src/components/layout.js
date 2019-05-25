/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Navbar from './navbar';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={`container ${styles.layoutContainer}`}>
    <div className={styles.navbarContent}>
      <Navbar />
    </div>
    <div className={styles.mainContent}>
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
