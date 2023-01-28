import * as React from "react"
import { BiMenu } from "react-icons/bi"
import Logo from "./Logo"
import Navigation from "./Navigation/Navigation"

const Header = () => {
   return (
      <div
         className={"bg-white sticky top-0 z-40 backdrop-blur-lg"}
      >
         <header className="container py-10 flex justify-between">
            <div
               className={`text-neutral-900 flex items-center`}
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
