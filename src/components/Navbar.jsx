import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import InternalLink from './typography/InternalLink';
import image from '../images/minimal_j.svg';

const NavItem = ({ to, children }) => (
  <li className="ml-2 md:ml-0 md:mt-2">
    <InternalLink to={to}>{children}</InternalLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Navbar = () => (
  <nav className="flex md:flex-col md:fixed md:w-40 md:pl-6 mb-4 md:mb-0 text-xl">
    <Link to="/" className="hover:opacity-75">
      <img
        className="max-w-none w-12 inline"
        src={image}
        alt="A geometric, minimal version of the J character"
      />
    </Link>
    <ul className="flex flex-wrap md:flex-col">
      <NavItem to="/now">Now</NavItem>
      <NavItem to="/posts">Posts</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  </nav>
);

export default Navbar;
