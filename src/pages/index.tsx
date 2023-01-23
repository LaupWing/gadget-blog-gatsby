import * as React from "react"
import LatestBlogs from "../components/LatestBlogs/LatestBlogs"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import Slideshow from "../components/Slideshow/Slideshow"

const IndexPage = () => (
   <Layout>
      <Slideshow/>
      <LatestBlogs/>
   </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
