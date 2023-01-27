/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
import { CreatePagesArgs } from "gatsby"
import path from "path"

export const createPages = async ({ actions }: CreatePagesArgs) => {
   const { createPage } = actions

   const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx")
   
   createPage({
      path: "/using-dsg",
      component: path.resolve("./src/templates/using-dsg.tsx"),
      context: {},
      defer: true,
   })
}
