import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BLOG_POST_QUERY = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: frontmatter___publishedDate }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            publishedDate(formatString: "MMMM DD, YYYY")
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

const Blog = () => {
  const data = useStaticQuery(BLOG_POST_QUERY);
  const posts = data.allMarkdownRemark.edges.map(post => {
    return (
      <li key={post.node.frontmatter.slug}>
        <Link to={`/blog${post.node.frontmatter.slug}`}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
          <p>{post.node.excerpt}</p>
        </Link>
        <Link className="read-more" to={`/blog${post.node.frontmatter.slug}`}>
          Read more
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <SEO title="Blog from a Dog (and Cat)" />
      <h1>Blog</h1>
      <ul>{posts}</ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;
