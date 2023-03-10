import React, {useState} from "react"
import { BiMenu } from "react-icons/bi"
import Logo from "../../Logo"
import Navigation from "./Navigation/Navigation"
import OverlayMenu from "./OverlayMenu"

const Header = () => {
   const [showOverlay, setShowOverlay] = useState(false)
   return (
      <>
         <OverlayMenu showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
         <header className={"bg-white border-b-2 border-black sticky top-0 z-40 backdrop-blur-lg"}>
            <div className="container py-10 flex justify-between">
               <div
                  className={`text-neutral-900 flex items-center`}
               >
                  <BiMenu 
                     onClick={()=> setShowOverlay(true)} 
                     className="mr-2 sm:hidden" 
                     size={25} 
                  />
                  <Logo />
               </div>
               <nav className="sm:flex hidden">
                  <Navigation />
               </nav>
            </div>
         </header>
      </>
   )
}
export default Header
