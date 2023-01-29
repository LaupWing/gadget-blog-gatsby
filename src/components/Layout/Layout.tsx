import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
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
         <Footer/>
      </div>
   )
}

export default Layout
