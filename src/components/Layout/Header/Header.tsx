import * as React from "react"
import { BiMenu } from "react-icons/bi"
import useDarkMode from "../../../hooks/useDarkMode"
import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = () => {
   const { darkMode } = useDarkMode()

   return (
      <div
         className={`${
            darkMode ? "bg-neutral-900" : "bg-neutral-100"
         } duration-200 sticky top-0 z-40`}
      >
         <header className="container py-10 flex justify-between">
            <div
               className={`${
                  darkMode ? "text-neutral-100" : "text-neutral-900"
               } flex items-center`}
            >
               <BiMenu className="mr-2 sm:hidden" size={25} />
               <Logo />
            </div>
            <nav className="sm:flex hidden">
               <Navigation />
            </nav>
         </header>
      </div>
   )
}
export default Header
