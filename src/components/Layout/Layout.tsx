/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import { useLocation } from "@gatsbyjs/reach-router"
import useDarkMode from "../../hooks/useDarkMode"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
   const {darkMode } = useDarkMode()
   // const test = useLocation()
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
               description
            }
         }
      }
   `)
   console.log(data)

   return (
      <div className="w-screen h-screen bg-neutral-900 overflow-y-auto flex flex-col duration-700 transition-all relative">
         {/* <Header /> */}
         <div
            style={{
               margin: `0 auto`,
               maxWidth: `var(--size-content)`,
               padding: `var(--size-gutter)`,
            }}
         >
            <main>{children}</main>
            <footer
               style={{
                  marginTop: `var(--space-5)`,
                  fontSize: `var(--font-sm)`,
               }}
            >
               © {new Date().getFullYear()} &middot; Built with
               {` `}
               <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
         </div>
      </div>
   )
}

export default Layout
