import { useLatestBlogQuery } from "../../hooks/useLatestBlogQuery"
import * as React from "react"
import PostPreview from "../BlogPreview/BlogPreview"

const LatestBlogs = () => {
   const data = useLatestBlogQuery()

   return (
      <div className="container py-10">
         <h2 className="text-white text-2xl font-bold">Latest blogs</h2>
         <div className="grid sm:grid-cols-2 grid-cols-1 my-5">
            {data.map(x => (
               <PostPreview
                  data={x}
               />
            ))}
         </div>
      </div>
   )
}
export default LatestBlogs
