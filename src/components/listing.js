import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// import SEO from './seo';

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
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
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/blog${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/blog${node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))
    }
  />
);

export default Listing;
