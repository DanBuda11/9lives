import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
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
    file(relativePath: { regex: "/pets/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Bloglist = styled.ul`
  list-style: none;
`;

const Blogpost = styled.li`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: blue;
  }
`;

const Blog = () => {
  const data = useStaticQuery(BLOG_POST_QUERY);
  const posts = data.allMarkdownRemark.edges.map(post => {
    return (
      <Blogpost key={post.node.frontmatter.slug}>
        <Link
          to={`/blog${post.node.frontmatter.slug}`}
          // style={{
          //   boxShadow: `5px 5px 5px rgba(0,0,0,.3)`,
          //   textDecoration: `none`,
          //   display: `inline-block`,
          //   marginBottom: `1rem`,
          // }}
        >
          <h2
          // style={{
          //   marginBottom: `0.3rem`,
          // }}
          >
            {post.node.frontmatter.title}
          </h2>
          <p
          // style={{
          //   fontSize: `10px`,
          //   margin: 0,
          // }}
          >
            {post.node.frontmatter.date}
          </p>
          <p>{post.node.excerpt}</p>
        </Link>
        <Link className="read-more" to={`/blog${post.node.frontmatter.slug}`}>
          Read more
        </Link>
      </Blogpost>
    );
  });

  return (
    <Layout>
      <SEO title="Blog from a Dog (and Cat)" />
      <h1>Blog</h1>
      <Bloglist
      // style={{
      //   listStyle: `none`,
      // }}
      >
        {posts}
      </Bloglist>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;
