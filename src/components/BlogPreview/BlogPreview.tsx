import { getImage, GatsbyImage, } from "gatsby-plugin-image"
import * as React from "react"

const PostPreview = (data: any) => {
   console.log(data)
   return (
      <div className="flex flex-col rounded p-1.5 relative border-transparent border-2 hover:border-neutral-700 group duration-150 cursor-pointer col-span-1">
         {/* <GatsbyImage
            image={}
         /> */}
      </div>
   )
}
export default PostPreview
