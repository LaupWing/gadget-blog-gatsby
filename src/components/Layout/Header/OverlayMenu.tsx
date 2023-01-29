import { useLocation } from "@gatsbyjs/reach-router"
import { Link } from "gatsby"
import React from "react"
import { IoClose } from "react-icons/io5"
import useMenuQuery from "../../../hooks/useMenuQuery"

const OverlayMenu = ({ setShowOverlay, showOverlay }: any) => {
   const menu = useMenuQuery()
   const location = useLocation()
   const isBlog = (item: string) => item.includes("blog") && location.pathname.includes("blog")

   return (
      <>
         {showOverlay && <div className="bg-black/50 fixed inset-0 z-50"/>}
         <div
            className={`fixed flex flex-col top-0 left-0 bottom-0 shadow-hard-base border-r-2 border-black w-4/5 z-50 bg-white overflow-hidden duration-500 p-2 sm:hidden transform ${
               showOverlay 
                  ? "" 
                  : "-translate-x-[110%]"
            }`}
         >
            <IoClose
               className="text-neutral-600 ml-auto"
               size={34}
               onClick={() => setShowOverlay(false)}
            />
            <nav className="m-auto">
               <ul className="flex text-neutral-900 uppercase text-lg font-bold space-y-4 tracking-wider flex-col">
                  {menu.map(
                     (item:any) =>
                        !item.parentId && (
                           <div
                              className="flex items-center justify-between"
                              key={item.id}
                           >
                              <Link
                                 onClick={() => setShowOverlay(false)}
                                 to={item.url}
                                 className={`flex items-center relative py-1 ${
                                    isBlog(item.url) 
                                       ? "text-violet-600" 
                                       : ""
                                 }`}
                                 activeClassName="text-violet-600"
                              >
                                 <li>{item.label}</li>
                              </Link>
                           </div>
                        )
                  )}
               </ul>
            </nav>
         </div>
      </>
   )
}

export default OverlayMenu
