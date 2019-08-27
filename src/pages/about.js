import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <div>
      <h1>About 9 Lives Synergistic Business Solutions</h1>
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

export default About;
