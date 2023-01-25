import { graphql, useStaticQuery } from "gatsby"

export const useLatestBlogQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         allWpPost(limit: 4, sort: { date: DESC }) {
            nodes {
               uri
               title
               excerpt
               id
               slug
               dateGmt
               date(fromNow: true)
               categories {
                  nodes {
                     name
                  }
               }
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
