import * as React from "react"

const SideContainer:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="flex relative height-[60vh]">
         <div className="container flex my-4">
            {children}
         </div>
      </div>
   )
}
export default SideContainer
