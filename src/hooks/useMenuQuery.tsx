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
   return data.wpMenu.menuItems.nodes.map((item: {url: string})=>({
      ...item,
      url: item.url.includes("http") ? "/" : item.url

   }))
}
export default useMenuQuery