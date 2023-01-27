import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout/Layout"

interface Props {
   data: {
      edges: {
         node:{
            date: string
            excerpt: string,
            id: string,
            slug: string,
            title: string,
            uri: string,
         }
      }[]
   }
}

const BlogPost:React.FC<Props> = ({data}) => {
   console.log(data)
   return (
      <Layout>
         <StaticImage
            src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            placeholder="tracedSVG"
            width={1920}
            height={300}
            alt="Blog Hero"
         />
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