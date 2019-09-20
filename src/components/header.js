import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import headerStyles from '../styles/header.module.scss';

const HeaderWrapper = styled.div`
  background: #bada55;
  img {
    margin-bottom: 0;
  }
`;

const ListItem = styled.li`
  margin: 1rem 3rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper className="header-main">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className={headerStyles.headerLinks}>
        <ListItem>
          <Link to="/about">About Us</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog">Blog</Link>
        </ListItem>
        <ListItem>
          <Link to="/company/team">Meet the Team!</Link>
        </ListItem>
      </ul>
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
