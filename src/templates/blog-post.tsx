import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout/Layout"
import { BlogType } from "../../types"
import BlogPreview from "../components/BlogPreview/BlogPreview"

interface Props {
   data: {
      allWpPost:{
         edges: {
            node: BlogType
         }[]
      }
   }
   pageContext: any
}

const BlogPost:React.FC<Props> = ({data, pageContext}) => {
   console.log(pageContext)
   return (
      <Layout>
         <div className="relative">
            <StaticImage
               src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               placeholder="tracedSVG"
               width={1920}
               height={300}
               alt="Blog Hero"
            />
            <div className="absolute inset-0 flex items-center justify-center flex-1 bg-white/60 backdrop-blur-sm z-50">
               <h2 className="uppercase text-2xl text-center tracking-wider">
                  {pageContext.category.node.name}
               </h2>
            </div>
         </div>
         <div className="container grid sm:grid-cols-2 grid-cols-1 my-5 gap-y-10 gap-x-4">
            {data.allWpPost.edges.map((x) => (
               <BlogPreview
                  data={x.node}
                  key={x.node.id}
               />
            ))}
         </div>
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
   }
`