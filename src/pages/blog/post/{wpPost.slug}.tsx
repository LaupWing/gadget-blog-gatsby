import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { BlogType } from "../../../../types"
import BreadCrumbs from "../../../components/BreadCrumbs"
import CommentSection from "../../../components/CommentSection"

const BlogPost = ({ data }: any) => {
   
   return (
      <section className="px-4">
         <article className="container shadow-hard-lg space-y-4 p-4 bg-white mt-4 rounded-2xl border-2 border-black">
            <BreadCrumbs parents={data.post.categories.nodes.slice(0, 2)} />
            <BlogPostHeader post={data.post} />
            <div
               id="wp-content"
               className="container text-neutral-700 mt-4"
               dangerouslySetInnerHTML={{ __html: data.post.content }}
            />
         </article>
         <div className="container lg:px-4">
            <CommentSection post={data.post}/>
         </div>
      </section>
   )
}

const BlogPostHeader = ({ post }: { post: BlogType }) => {
   return (
      <div className="relative rounded-xl overflow-hidden h-[30vh]">
         <time className="absolute z-40 top-2 left-2 text-white font-bold text-sm">
            {post.date}
         </time>
         <div className="z-40 absolute inset-0 flex items-center justify-center">
            <h1 className="text-neutral-900 bg-emerald-300 border-2 border-black px-8 py-4 rounded-xl uppercase font-bold tracking-wider text-xl shadow-hard-base">
               {post.title}
            </h1>
         </div>
         
         <GatsbyImage
            className="h-full object-contain"
            image={getImage(post.featuredImage.node.localFile)!}
            alt="Cover image"
         />
      </div>
   )
}

export default BlogPost
export const pageQuery = graphql`
   query ($id: String!) {
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
                     id
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
