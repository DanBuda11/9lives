import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const About = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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
      <div>
        <h1>About 9 Lives Synergistic Business Solutions</h1>
        {location.pathname === '/' && (
          <Img fluid={data.file.childImageSharp.fluid} />
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          deserunt excepturi rem repellendus tempore, nam aliquid accusamus
          dolorem molestiae voluptas explicabo iusto pariatur quaerat dolor fuga
          tempora doloribus recusandae deleniti.
        </p>
      </div>
      <Link to="/">Back Home</Link>
    </Layout>
  );
};

About.propTypes = {
  location: {},
};
export default About;
