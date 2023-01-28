import * as React from "react"
import LatestBlogs from "../components/LatestBlogs/LatestBlogs"

import Seo from "../components/Seo"
import Slideshow from "../components/Slideshow/Slideshow"

const IndexPage = () => (
   <section>
      <Slideshow/>
      <LatestBlogs/>
   </section>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
