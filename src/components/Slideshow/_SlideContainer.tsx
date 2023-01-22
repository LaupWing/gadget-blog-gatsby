import * as React from "react"

const SlideContainer:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="flex relative h-[60vh]">
         <div className="container flex my-4">
            {children}
         </div>
      </div>
   )
}
export default SlideContainer
