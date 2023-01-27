import * as React from "react"
import { Category } from "../../../types"
import Desktop from "./Desktop"

const CategoryNav:React.FC<{categories: Category[]}> = ({categories}) => {
   return (
      <>
         <Desktop categories={categories}/>
      </>
   )
}
export default CategoryNav
