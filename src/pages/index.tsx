import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Slideshow from "../components/Slideshow/Slideshow"

const IndexPage = () => (
   <Layout>
      <Slideshow/>
   </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
