import { ImageDataLike } from "gatsby-plugin-image"

export type BlogType = {
   date: string
   dateGmt: string
   excerpt: string
   featuredImage: {
      node: ImageDataLike
   }
   slug: string
   title: string
   uri: string
}