import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import BreadCrumbs from "../components/BreadCrumbs"

const PageTemplate = ({data}:any) => {
   return (
      <section className="">
         <div className="relative h-[30vh] max-h-56">
            <GatsbyImage
               image={getImage(data.wpPage.featuredImage.node.localFile)!}
               alt="Blog Hero"
               className="object-cover h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center flex-1 bg-white/60 backdrop-blur-sm z-20">
               <h2 className="uppercase text-2xl text-center bg-green-300 p-2 rounded-xl shadow-hard-base font-bold px-4 border-2 border-black tracking-wider flex">
                  {data.wpPage.title}
               </h2>
            </div>
         </div>
         <main className="container shadow-hard-lg space-y-4 p-4 bg-white mt-4 rounded-2xl border-2 border-black">
            <div className="py-4">
               <BreadCrumbs/>
            </div>
            <div 
               id='wp-content'
               className="text-neutral-700 mt-4"
               dangerouslySetInnerHTML={{__html: data.wpPage.content}}
            >

            </div>
         </main>
      </section>
   )
}
export default PageTemplate
export const pageQuery = graphql`
   query($id: String!) {
      wpPage(id: {eq: $id}) {
         id
         title
         content
         featuredImage {
            node {
               id
               localFile {
                  childImageSharp {
                     gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
                  }
               }
            }
         }
      }
   }

`