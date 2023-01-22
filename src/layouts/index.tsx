import * as React from "react"
import { DarkModeProvider } from "../hooks/useDarkMode"

const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <DarkModeProvider>
         {children}
      </DarkModeProvider>
   )
}
export default Layout
