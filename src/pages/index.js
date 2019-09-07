import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Listing from '../components/listing';
import SEO from '../components/seo';

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query indexDescription {
      site {
        siteMetadata {
          description
        }
      }
      file(relativePath: { regex: "/pets/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>{data.site.siteMetadata.description}</p>
      {location.pathname === '/' && (
        <Img fluid={data.file.childImageSharp.fluid} />
      )}
      <Link to="/about">Lean About the Biz!</Link>
      <br />
      <Link to="/company/team">Meet the Team!</Link>
      <br />
      <Link to="/blog">Go to the Blog!</Link>
      <Listing />
    </Layout>
  );
};

IndexPage.propTypes = {
  location: {},
};

export default IndexPage;
