import * as React from "react"
// import { DarkModeProvider } from "../hooks/useDarkMode"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from "../components/Layout/Layout"

const LayoutTemplate:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <Layout>
         {children}
      </Layout>
   )
}
export default LayoutTemplate
