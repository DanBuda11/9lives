import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query indexDescription {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>{data.site.siteMetadata.description}</p>
      <Link to="/about">Lean About the Biz!</Link>
      <br />
      <Link to="/company/team">Meet the Team!</Link>
      <br />
      <Link to="/blog">Go to the Blog!</Link>
    </Layout>
  );
};

export default IndexPage;
