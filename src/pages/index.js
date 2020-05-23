import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import profilePic from '../images/profile-pic.jpg';
import wavingHand from '../images/waving-hand.png';

const MyProfile = styled.div`
  padding-top: 40px;
  .profile {
    display: flex;
    align-items: center;
    margin: 0 0 10px;
    img {
      &.profile-pic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
      }
      &.waving-hand {
        width: 30px;
        height: auto;
        margin: -4px 5px 0;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      display: flex;
      align-items: center;
    }
  }
  p {
    margin: 0 0 15px;
  }
`;

const SideProjects = styled.div`
  margin: 60px 0;
  h3 {
    margin: 0 0 5px;
  }
`;

const Blogs = styled.div`
  margin: 60px 0;
  h3 {
    margin: 0 0 5px;
  }
`;

const ReachOut = styled.div`
  margin: 60px 0;
  h3, p {
    margin: 0 0 5px;
  }
`;

const IndexPage = () => {
  const { allMarkdownRemark: { edges: allBlogs } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { slug: { regex: "/blog/" } } },
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 3
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
  <Layout noHeader>
    <SEO title="Home" />

    <MyProfile>
      <div className="profile">
        <img src={profilePic} alt="profile-pic" className="profile-pic" />
        <h3>Hi <img src={wavingHand} alt="waving-hand" className="waving-hand" />, I'm Kishore.</h3>
      </div>
      <p>I'm a software engineer at <a href="https://fractal.ai/" target="_blank" rel="noopener noreferrer">Fractal</a>. Part of the front end team. Working closely on various design and functionality aspects. Working on React, React Native, Angular, Javascript, Html, Css etc.</p>
      <p>I like to write tech blogs, specially about latest and greatest front end technologies and hence this website where I will mainly put my writings. Apart from this you can check out my <a href="https://medium.com/@patra.kishore65" target="_blank" rel="noopener noreferrer">Medium</a> and <a href="https://dev.to/reachtokish" target="_blank" rel="noopener noreferrer">Dev.to</a> profile.</p>
    </MyProfile>

    <SideProjects>
      <h2>Side projects</h2>
      <ul>
        <li>
          <h3><a href="https://github.com/reachtokish/rctx-tooltip" target="_blank" rel="noopener noreferrer">rctx-tooltip</a></h3>
          <p>Tooltip library extensively for react library.</p>
        </li>
        <li>
          <h3><a href="https://github.com/reachtokish/rctx-contextmenu" target="_blank" rel="noopener noreferrer">rctx-contextmenu</a></h3>
          <p>Context menu plugin for React.</p>
        </li>
      </ul>
    </SideProjects>

    <Blogs>
      <h2>Recent writings</h2>
      <ul>
        {allBlogs.map((el, index) => (
          <li key={index}>
            <h3><Link to={`${el.node.frontmatter.slug}`}>{el.node.frontmatter.title}</Link></h3>
            <p>{el.node.frontmatter.excerpt}</p>
          </li>
        ))}
      </ul>
      <Link to="/all-blogs">All writings</Link>
    </Blogs>

    <ReachOut>
      <h2>Reach me out</h2>
      <p><a href="mailto:patra.kishore65@gmail.com">patra.kishore65@gmail.com</a></p>
      <p>
        <a href="https://github.com/reachtokish" target="_blank" rel="noopener noreferrer">Github</a> .&nbsp;
        <a href="https://www.linkedin.com/in/reachtokish/" target="_blank" rel="noopener noreferrer">Linkedin</a> .&nbsp;
        <a href="https://www.facebook.com/kishore.patra.334" target="_blank" rel="noopener noreferrer">Facebook</a> .&nbsp;
        <a href="https://www.instagram.com/reach2kishore/" target="_blank" rel="noopener noreferrer">Instagram</a> .&nbsp;
        <a href="https://www.npmjs.com/~reachtokish" target="_blank" rel="noopener noreferrer">Npm</a> .&nbsp;
        <a href="https://twitter.com/reachtokish" target="_blank" rel="noopener noreferrer">Twitter</a> .&nbsp;
        <a href="https://medium.com/@patra.kishore65" target="_blank" rel="noopener noreferrer">Medium</a> .&nbsp;
        <a href="https://dev.to/reachtokish" target="_blank" rel="noopener noreferrer">Dev.to</a>
      </p>
    </ReachOut>
  </Layout>
)};

export default IndexPage
