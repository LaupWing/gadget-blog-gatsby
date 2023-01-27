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

export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
   const { createPage } = actions

   const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx")

   const result = await graphql(`
      query {
         wp {
            readingSettings {
               postsPerPage
            }
         }
         allWpCategory {
            edges {
               node {
                  name
                  id
                  uri
                  slug
                  count
               }
            }
         }
      }
   `)

   if(result.errors){
      reporter.panicOnBuild("Something went wrong during the creation", result.errors)
      return
   }

   const {wp, allWpCategory} = result.data as any
   
   allWpCategory.edges.forEach((category:any) => {
      const postsPerPage = wp.readingSettings.postsPerPage
      const numberOfPosts = category.node.count
      const numberOfPages = Math.ceil(numberOfPosts / postsPerPage)

      if(numberOfPosts > 0 || category.node.name !== "uncategorized"){
         Array.from({length: numberOfPages}).forEach((_:any, i:number)=>{
            createPage({
               path: i === 0
                  ? category.node.uri
                  : `${category.node.uri}${i + 1}`,
               component: blogPostTemplate,
               context: {
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numberOfPages,
                  currentPage: i + 1,
                  categoryId: category.node.id,
                  category,
                  allCategories: allWpCategory
               }
            })
         })
      }
   })
}
