const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        destinations: allSanityDestinations {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const destinationTemplate = path.resolve(`src/templates/destination.js`)
  result.data.destinations.edges.forEach(({ node }) => {
    const path = `/destinations/${node.slug.current}`
    createPage({
      path,
      component: destinationTemplate,
      context: {
        slug: node.slug.current,
        // pagePath: path,
      },
    })
  })
}
