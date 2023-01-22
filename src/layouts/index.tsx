import * as React from "react"
import { DarkModeProvider } from "../hooks/useDarkMode"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <DarkModeProvider>
         {children}
      </DarkModeProvider>
   )
}
export default Layout
