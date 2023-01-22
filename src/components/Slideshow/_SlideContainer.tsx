import * as React from "react"

const SlideContainer:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="flex relative h-[60vh]">
         <div className="container flex my-4">
            {children}
         </div>
         <img className="absolute inset-0 opacity-5 -z-10 h-full object-cover" src="https://i.imgur.com/wblnWBh.png" alt="carousel background" />
      </div>
   )
}
export default SlideContainer
