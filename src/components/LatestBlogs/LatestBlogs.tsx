import { useLatestBlogQuery } from "../../hooks/useLatestBlogQuery"
import * as React from "react"

const LatestBlogs = () => {
   const data = useLatestBlogQuery()
   console.log(data)

   return (
      <div className="container py-10">

      </div>
   )
}
export default LatestBlogs
