import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Blogs = styled.div`
  margin: 30px 0;
  h3 {
    margin: 0 0 5px;
  }
`;

export default function AllBlogs() {
  const { allMarkdownRemark: { edges: allBlogs } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { slug: { regex: "/blog/" } } },
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              headings {
                depth
                value
              }
              frontmatter {
                slug
                date
                title
                author
                categories
                keywords,
                excerpt
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="All Blogs" />
      <Blogs>
        <h2>All writings</h2>
        <ul>
          {allBlogs.map((el, index) => (
            <li key={index}>
              <h3><Link to={`${el.node.frontmatter.slug}`}>{el.node.frontmatter.title}</Link></h3>
              <p>{el.node.frontmatter.excerpt}</p>
            </li>
          ))}
        </ul>
      </Blogs>
    </Layout>
  )
}