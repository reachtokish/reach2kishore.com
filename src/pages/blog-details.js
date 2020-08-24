import React from "react";
import { graphql, Link } from "gatsby";
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
  width: 180px;
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

const Pager = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  div {
    width: 30%;
    a {
      text-decoration: none;
      &.next {
        text-align: right;
      }
      h4 {
        margin: 0 0 10px
      }
      p {
        line-height: 24px;
      }
    }
  }
`;

export default function Template({
  data, pageContext
}) {
  // console.log(pageContext);
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
      <hr />
      <Pager>
        <div className="prev">
          {pageContext.prev && (
            <Link to={pageContext.prev.frontmatter.slug}>
              <h4>Prev</h4>
              <p>{pageContext.prev.frontmatter.title}</p>
            </Link>
          )}
        </div>
        <div style={{textAlign: "center"}}>
          <Link to="/">Home</Link>
        </div>
        <div className="next">
          {pageContext.next && (
            <Link to={pageContext.next.frontmatter.slug}>
              <h4>Next</h4>
              <p>{pageContext.next.frontmatter.title}</p>
            </Link>
          )}
        </div>
      </Pager>
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