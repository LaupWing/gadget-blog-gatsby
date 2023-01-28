import { Link } from "gatsby"
import { getImage, GatsbyImage, } from "gatsby-plugin-image"
import * as React from "react"
import { BlogType } from "../../../types"
import Icons from "../Icons"

const BlogPreview:React.FC<{data: BlogType}> = ({data}) => {
   return (
      <Link to={`/blog/post${data.uri}`}>
         <article className="flex flex-col rounded-2xl p-4 shadow-hard-lg relative border-transparent border-2 border-neutral-900 group duration-150 cursor-pointer col-span-1">
            <div className="relative rounded-xl overflow-hidden">
               <div className="absolute group-hover:text-indigo-500 duration-150 z-50 p-2 text-neutral-200">
                  <Icons
                     size={35}
                     name={data.categories.nodes.filter(x => x.name !== "All Posts")[0].name}
                  />
               </div>
               <GatsbyImage
                  image={getImage(data.featuredImage.node.localFile)!}
                  alt="Preview image"
                  className="aspect-[6/4]"
               />
               <time 
                  className="group-hover:text-indigo-600 text-neutral-600 absolute top-3 right-3 uppercase text-xs font-bold z-20 bg-white/80 backdrop-blur-lg px-2 py-[1px] rounded" 
                  dateTime={data.dateGmt}
               >
                  {data.date}
               </time>
            </div>
            <h2 className="py-2 group-hover:text-indigo-500 text-neutral-900 font-bold text-md">
               {data.title}
            </h2>
            <div
               className="line-clamp-2 text-sm text-neutral-400 font-bold"
               dangerouslySetInnerHTML={{__html:data.excerpt}}
            />
         </article>
      </Link>
   )
}
export default BlogPreview
