import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import pets from '../../images/pets.jpg';

const Team = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
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
      <div>
        <h1>Meet the Team!</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
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
export default Team;
