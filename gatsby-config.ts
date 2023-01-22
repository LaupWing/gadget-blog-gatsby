/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import { GatsbyConfig } from "gatsby"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config: GatsbyConfig  = {
   siteMetadata: {
      title: `Tech-Heaven`,
      description: `The latest technical innovations are covered in news, reviews, and opinions in the "Tech Heaven" technology and gadget blog. Our objective is to help readers make informed purchasing decisions by providing in-depth reviews, real-world examples, and comprehensive comparisons. We also make an effort to explain complex scientific concepts simply while presenting the most recent technological advancements and news.`,
      author: `@laupwing`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
   },
   plugins: [
      `gatsby-plugin-layout`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-image`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            // This will impact how browsers show your PWA/website
            // https://css-tricks.com/meta-theme-color-and-trickery/
            // theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
         },
      },
      {
         resolve: `gatsby-source-wordpress`,
         options: {
            url: `https://tech-heaven.laupwing.site/graphql`
         }
      },
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: { 
            fonts: [
               `Teko\:200, 400, 500, 600, 700`
            ],
            display: `swap`
         }
      }
   ],
}

export default config