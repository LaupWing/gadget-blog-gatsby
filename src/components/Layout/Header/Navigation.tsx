import * as React from "react"
import useMenuQuery from "../../../hooks/useMenuQuery"

const Navigation = () => {
   const menu = useMenuQuery()
   console.log(menu)
   return <div>Navigation</div>
}
export default Navigation
