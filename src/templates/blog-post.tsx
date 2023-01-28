import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { BlogType } from "../../types"
import BlogPreview from "../components/BlogPreview/BlogPreview"
import Icons from "../components/Icons"
import CategoryNav from "../components/CategoryNav"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import BreadCrumbs from "../components/BreadCrumbs"

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
   return (
      <>
         <div className="relative">
            <StaticImage
               src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               placeholder="tracedSVG"
               width={1920}
               height={300}
               alt="Blog Hero"
            />
            <div className="absolute inset-0 flex items-center justify-center flex-1 bg-white/60 backdrop-blur-sm z-20">
               <h2 className="uppercase text-2xl text-center bg-green-300 p-2 rounded-xl shadow-hard-base font-bold px-4 border-2 border-black tracking-wider flex">
                  {pageContext.category.node.name}
                  <Icons 
                     name={pageContext.category.node.name} 
                     size={30}
                     className="ml-2"
                  />
               </h2>
            </div>
         </div>
         <div className="container mt-4">
            <BreadCrumbs/>
         </div>
         <div className="flex container my-5 space-x-4">
            <CategoryNav categories={pageContext.allCategories.edges.filter((x:any)=>x.node.name !== "Uncategorized")}/>
            <div className="flex-1 flex-col flex">
               <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-4">
                  {data.allWpPost.edges.map((x) => (
                     <BlogPreview
                        data={x.node}
                        key={x.node.id}
                     />
                  ))}
               </div>
               <Pagination
                  categoriUri={pageContext.category.node.uri}
                  currentPage={pageContext.currentPage}
                  numberOfPages={pageContext.numberOfPages}
               />
            </div>
         </div>
      </>
   )
}
export default BlogPost

const Pagination = ({categoriUri, currentPage, numberOfPages}:any) =>{
   return (
      <div className="flex justify-between mt-8 items-center">
         <Link
            to={`${categoriUri}${currentPage === 2 ? "" : currentPage -1}`}
            className={currentPage > 1 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="w-24 py-1 shadow-hard-base flex items-center justify-center bg-teal-300 border-black border-2 font-bold rounded hover:bg-teal-400">
               <BsArrowLeftShort size={24}/>
               Newer
            </button>
         </Link>
         <p className="font-bold">{currentPage} / {numberOfPages}</p>
         <Link
            to={`${categoriUri}${currentPage + 1}`}
            className={currentPage < numberOfPages 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="w-24 py-1 shadow-hard-base flex items-center justify-center bg-teal-300 border-black border-2 font-bold rounded hover:bg-teal-400">
               Older
               <BsArrowRightShort size={24}/>
            </button>
         </Link>
      </div>
   )
}

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