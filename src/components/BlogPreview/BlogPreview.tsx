import { getImage, GatsbyImage, } from "gatsby-plugin-image"
import * as React from "react"
import { BlogType } from "../../../types"

const PostPreview:React.FC<{data: BlogType}> = ({data}) => {
   console.log(data)
   return (
      <div className="flex flex-col rounded p-1.5 relative border-transparent border-2 hover:border-neutral-700 group duration-150 cursor-pointer col-span-1">
         <GatsbyImage
            image={getImage(data.featuredImage.node.localFile)!}
            alt="Preview image"
            className="aspect-[6/4]"
         />
      </div>
   )
}
export default PostPreview
