import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "../components/Layout/Layout"

const LayoutTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <Layout>
         <ToastContainer/>
         {children}
      </Layout>
   )
}
export default LayoutTemplate
