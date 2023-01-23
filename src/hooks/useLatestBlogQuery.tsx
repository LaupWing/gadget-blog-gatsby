import { graphql, useStaticQuery } from "gatsby"

export const useLatestBlogQuery = () =>{
   const data = useStaticQuery(graphql`
      query {
         allWpPost(
            sort: { fields: date, order: DESC }
            limit: 4
         ){
            nodes {
               uri
               title
               excerpt
               id
               slug
               dateGmt
               date(fromNow: true)
               featuredImage {
                  node {
                     localFile {
                        childImageSharp {
                        gatsbyImageData(width: 720, placeholder: TRACED_SVG)
                        }
                     }
                  }
               }
            }
         }
      }
   `)
   return data
}