import { graphql } from "gatsby"
import * as React from "react"
import BreadCrumbs from "../../../components/BreadCrumbs"
import Layout from "../../../components/Layout/Layout"

const BlogPost = ({data}:any) => {
   console.log(data)
   return (
      <Layout>
         <article className="container">
            <BreadCrumbs parents={data.post.categories.nodes}/>
         </article>
      </Layout>
   )
}


export default BlogPost
export const pageQuery = graphql`
  query($id: String!) {
      post: wpPost(id: { eq: $id }) {
         title
         content
         comments {
            nodes {
               parentId
               databaseId
               replies {
                  nodes {
                     date(fromNow: true)
                     content
                     author {
                        node {
                           name
                           url
                        }
                     }
                  }
               }
               id
               date(fromNow: true)
               content
               author {
                  node {
                     name
                     url
                  }
               }
            }
         }
         id
         databaseId
         author {
            node {
               name
            }
         }
         date(formatString: "DD MM YYYY")
         featuredImage {
            node {
               id
               localFile {
                  childImageSharp {
                     gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
                  }
               }
            }
         }
         categories {
            nodes {
               id
               name
               uri
               slug
            }
         }
      }
   }
`
