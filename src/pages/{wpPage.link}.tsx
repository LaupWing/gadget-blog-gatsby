import * as React from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import Layout from "../components/Layout/Layout"

const PageTemplate = () => {
   return (
      <Layout>
         <main className="container">
            <BreadCrumbs/>
         </main>
      </Layout>
   )
}
export default PageTemplate
