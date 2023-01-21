import * as React from "react"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="bg-red-100">
         test
         {children}
      </div>
   )
}
export default Layout
