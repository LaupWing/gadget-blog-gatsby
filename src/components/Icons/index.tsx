import * as React from "react"
import { BsFillLaptopFill } from "react-icons/bs"
import { FaHeadphones, FaMobile, FaTablet } from "react-icons/fa"

const Icons = (props: any) => {
   return (
      <>
         <BsFillLaptopFill
            {...props}
         />
         <FaTablet
            {...props}
         />
         <FaMobile
            {...props}
         />
         <FaHeadphones
            {...props}
         />
      </>
   )
}
export default Icons