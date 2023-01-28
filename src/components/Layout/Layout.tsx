import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import useDarkMode from "../../hooks/useDarkMode"
import Header from "./Header/Header"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
   // const {darkMode } = useDarkMode()
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

   return (
      <div className="w-screen h-screen overflow-y-auto flex flex-col duration-700 transition-all relative bg-pink-200">
         <Header />
         <main>{children}</main>
         <div
            style={{
               margin: `0 auto`,
               maxWidth: `var(--size-content)`,
               padding: `var(--size-gutter)`,
            }}
         >
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
