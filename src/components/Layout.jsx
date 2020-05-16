import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen text-xl text-gray-800">
      <div className="max-w-screen-lg flex-grow flex flex-col md:flex-row-reverse p-4">
        <Navbar />
        <div className="flex-grow md:mr-40">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
