import { ImageDataLike } from "gatsby-plugin-image"

export type BlogType = {
   date: string
   dateGmt: string
   excerpt: string
   featuredImage: {
      node: {
         localFile: ImageDataLike
      }
   }
   categories: {
      nodes: {
         name: string
      }[]
   }
   slug: string
   title: string
   uri: string
   id: string
}

export interface Category {
   node :{
      count: number
      id: string
      slug: string
      uri: string
      name: string
   }
}