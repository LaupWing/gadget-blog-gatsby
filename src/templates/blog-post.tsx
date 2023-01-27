import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout/Layout"

const BlogPost = () => {
   return (
      <Layout>
         
      </Layout>
   )
}
export default BlogPost

export const pageQuery = graphql`
   query($categoryId: String!, $skip: Int!, $limit: Int!){
      allWpPost(
         filter: {
            categories: {
               nodes:{
                  elemMatch:{
                     id: {
                        eq: $categoryId
                     }
                  }
               }
            }
         }
         skip: $skip
         limit: $limit
      ){
         edges {
            node {
               id
               title
               excerpt
               uri
               slug
               date(formatString: "DD MM YYYY")
            }
         }
      }
   }
`