import { useLatestBlogQuery } from "../../hooks/useLatestBlogQuery"
import * as React from "react"
import BlogPreview from "../BlogPreview/BlogPreview"

const LatestBlogs = () => {
   const data = useLatestBlogQuery()
   
   return (
      <div className="container py-10">
         <h2 className="text-neutral-900 text-2xl font-bold">Latest blogs</h2>
         <div className="grid sm:grid-cols-2 grid-cols-1 my-5 gap-y-10 gap-x-4">
            {data.allWpPost.nodes.map((x:any) => (
               <BlogPreview
                  data={x}
                  key={x.id}
               />
            ))}
         </div>
      </div>
   )
}
export default LatestBlogs
