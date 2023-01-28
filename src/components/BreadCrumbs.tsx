import { Link } from "gatsby"
import * as React from "react"

const BreadCrumbs:React.FC<{parent?:{
   uri: string
}}> = ({parent}) => {
   return (
      <div className="flex space-x-4">
         <Link to="/">
            Home
         </Link>
         {parent && <Link to={parent.uri}/>}
      </div>
   )
}
export default BreadCrumbs
