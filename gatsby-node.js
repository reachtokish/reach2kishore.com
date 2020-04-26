exports.createPages = async function ({ actions, graphql }) {
  // (filter: { frontmatter: { slug: { regex: "/blog/" } } })
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges;
  posts.forEach((edge, index) => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/blog-details.js`),
      context: {
        slug: slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node
      }
    })
  })
}