import * as React from "react"
import { BsFillLaptopFill } from "react-icons/bs"
import { FaHeadphones, FaMobile, FaTablet } from "react-icons/fa"

interface Props extends Record<string, unknown> {
   name: string
}

const Icons:React.FC<Props> = ({ name,...props}) => {
   const _name = name.toLowerCase()
   return (
      <>
         {_name === "laptops" && <BsFillLaptopFill
            {...props}
         />}
         {_name === "tablets" && <FaTablet
            {...props}
         />}
         {_name === "phones" && <FaMobile
            {...props}
         />}
         {_name === "headphones" && <FaHeadphones
            {...props}
         />}
      </>
   )
}
export default Icons