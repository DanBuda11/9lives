import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import headerStyles from '../styles/header.module.scss';

const Header = ({ siteTitle }) => (
  <div className="header-main">
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className={headerStyles.headerLinks}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/company/team">Meet the Team!</Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
