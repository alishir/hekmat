const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `HekmatsJson`) {
    // console.log("=========================")
    // console.log(node.internal.type)
    const fileNode = getNode(node.parent)
    // console.log(fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: `data/hekmats/` })
    // console.log(slug)
    const short_slug = slug.replace("/hekmats","")
    createNodeField({
      node,
      name: `slug`,
      value: short_slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allHekmatsJson(sort: {fields: No, order: ASC}) {
	edges {
	  node {
	    fields {
	      slug
	    }
	  }
          next {
	    fields {
	      slug
	    }
          }
          previous {
	    fields {
	      slug
	    }
          }
	}
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))

  result.data.allHekmatsJson.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/hekmat.js`),
      context: {
	// Data passed to context is available
	// in page queries as GraphQL variables.
	next,
	previous,
	slug: node.fields.slug,
      },
    })
  })
  
}
