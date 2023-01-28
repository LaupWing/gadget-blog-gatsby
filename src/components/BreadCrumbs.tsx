import { Link } from "gatsby"
import * as React from "react"

const BreadCrumbs:React.FC<{parent?:{
   uri: string
}}> = ({parent}) => {
   return (
      <div className="flex space-x-4 text-white text-sm font-bold tracking-tighter">
         <Link to="/">
            Home
         </Link>
         <span>/</span>
         {parent && (
            <>
               <Link to={parent.uri}>
                  test
               </Link>
               <span>/</span>
            </>
         )}
      </div>
   )
}
export default BreadCrumbs
