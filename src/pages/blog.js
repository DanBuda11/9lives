import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BLOG_POST_QUERY = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(BLOG_POST_QUERY);
  const posts = data.allMarkdownRemark.edges.map(post => {
    return (
      <li key={post.node.frontmatter.slug}>
        <Link
          to={`/blog${post.node.frontmatter.slug}`}
          style={{
            boxShadow: `5px 5px 5px rgba(0,0,0,.3)`,
            textDecoration: `none`,
            display: `inline-block`,
            marginBottom: `1rem`,
          }}
        >
          <h2
            style={{
              marginBottom: `0.3rem`,
            }}
          >
            {post.node.frontmatter.title}
          </h2>
          <p
            style={{
              fontSize: `10px`,
              margin: 0,
            }}
          >
            {post.node.frontmatter.date}
          </p>
          <p>{post.node.excerpt}</p>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <SEO title="Blog from a Dog (and Cat)" />
      <h1>Blog</h1>
      <ul
        style={{
          listStyle: `none`,
        }}
      >
        {posts}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;
