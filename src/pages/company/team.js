import React from 'react';
import Layout from '../../components/layout';
import pets from '../../images/pets.jpg';

const Team = () => (
  <Layout>
    <div>
      <h1>Meet the Team!</h1>
      <img
        style={{
          height: `150px`,
        }}
        src={pets}
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        deserunt excepturi rem repellendus tempore, nam aliquid accusamus
        dolorem molestiae voluptas explicabo iusto pariatur quaerat dolor fuga
        tempora doloribus recusandae deleniti.
      </p>
    </div>
  </Layout>
);

export default Team;
