/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
import path from "path"

exports.createPages = async ({ actions }) => {
   const { createPage } = actions
   createPage({
      path: "/using-dsg",
      component: path.resolve("./src/templates/using-dsg.tsx"),
      context: {},
      defer: true,
   })
}
