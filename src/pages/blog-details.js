import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import calendar from '../images/calendar.svg';
import styled from 'styled-components';

const BlogDate = styled.span`
  display: flex;
  align-items: center;
  background-color: #9100ff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
  width: 140px;
  margin-bottom: 10px;
  justify-content: center;
  img {
    width: 15px;
    height: 15px;
    display: block;
    margin-right: 10px;
    margin-top: -3px;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BlogDate>
        <img src={calendar} alt="Calendar icon" />
        {frontmatter.date}
      </BlogDate>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`