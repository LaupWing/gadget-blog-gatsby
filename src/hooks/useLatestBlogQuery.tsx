import { graphql, useStaticQuery } from "gatsby"

export const useLatestBlogQuery = () =>{
   const data = useStaticQuery(graphql`
      query {
         allWpPost(sort: { fields: date, order: DESC }){
            edges {
               node {
                  title
               }
            }
         }
      }
   `)
}