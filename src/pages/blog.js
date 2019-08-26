import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allMarkdownRemark {
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
  `);
  const posts = data.allMarkdownRemark.edges.map((post, i) => {
    return (
      <a
        href={post.node.frontmatter.slug}
        key={i}
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
      </a>
    );
  });

  return (
    <Layout>
      <SEO title="Blog from a Dog (and Cat)" />
      <h1>Blog</h1>
      {posts}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;
