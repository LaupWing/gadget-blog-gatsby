import { graphql, useStaticQuery } from "gatsby"

const useMenuQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         wpMenu(name: {eq: "mainMenu"}) {
            menuItems {
               nodes {
                  label
                  parentId
                  id
                  url
                  childItems {
                     nodes {
                        id
                        url
                        label
                     }
                  }
               }
            }
         }
      }
   `)
   console.log(data)
   return "test"
}
export default useMenuQuery