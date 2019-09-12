import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Listing from '../components/listing';
import SEO from '../components/seo';

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>{data.site.siteMetadata.description}</p>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{
          width: `300px`,
        }}
      />
      <Link to="/about">Lean About the Biz!</Link>
      <br />
      <Link to="/company/team">Meet the Team!</Link>
      <br />
      <Link to="/blog">Go to the Blog!</Link>
      <Listing />
    </Layout>
  );
};

export default IndexPage;
