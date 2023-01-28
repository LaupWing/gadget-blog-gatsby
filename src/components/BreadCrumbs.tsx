import { Link } from "gatsby"
import * as React from "react"

interface Props {
   parents?: {
      uri: string
      name: string
   } []
}

const BreadCrumbs:React.FC<Props> = ({parents, ...props}) => {
   return (
      <div {...props} className="flex space-x-4 text-sm font-bold tracking-tighter">
         <Link to="/">
            Home
         </Link>
         <span>/</span>
         {parents && (
            parents.map(parent => (
               <div key={parent.uri} className="space-x-4">
                  <Link 
                     to={parent.uri}
                  >
                     {parent.name}
                  </Link>
                  <span>/</span>
               </div>
            ))
         )}
      </div>
   )
}
export default BreadCrumbs
