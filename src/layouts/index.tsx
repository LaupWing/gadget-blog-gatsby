import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-notifications-component/dist/theme.css"
import "animate.css/animate.min.css"
import Layout from "../components/Layout/Layout"
import { ReactNotifications } from "react-notifications-component"

const LayoutTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <Layout>
         <ReactNotifications />
         {children}
      </Layout>
   )
}
export default LayoutTemplate
