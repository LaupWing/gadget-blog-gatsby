import { Link } from "gatsby"
import React from "react"
import { IoClose } from "react-icons/io5"
import { useMenuQuery } from "../../../hooks/useMenuQuery"

const OverlayMenu = ({ setShowOverlay, showOverlay, location }: any) => {
   const menu = useMenuQuery()
   const is_blog_or_work = item =>
      (item.url.includes("blog") && location.pathname.includes("blog")) ||
      (item.url.includes("work") && location.pathname.includes("work"))

   return (
      <div
         className={`fixed flex flex-col top-0 left-0 bottom-0 w-4/5 z-50 bg-neutral-800 overflow-hidden duration-500 p-2 sm:hidden transform ${
            showOverlay ? "" : "-translate-x-full"
         }`}
      >
         <IoClose
            className="text-neutral-600 ml-auto"
            size={34}
            onClick={() => setShowOverlay(false)}
         />
         <nav className="m-auto">
            <ul className="flex text-neutral-100 uppercase text-lg font-bold space-y-4 tracking-wider flex-col">
               {menu.map(
                  item =>
                     !item.parentId && (
                        <div
                           className="flex items-center justify-between"
                           key={item.id}
                        >
                           <Link
                              onClick={() => setShowOverlay(false)}
                              to={item.url}
                              className={`flex items-center hover:text-indigo-600 relative py-1 ${
                                 is_blog_or_work(item) ? "text-indigo-600" : ""
                              }`}
                              activeClassName="text-indigo-600"
                           >
                              <li>{item.label}</li>
                           </Link>
                        </div>
                     )
               )}
            </ul>
         </nav>
      </div>
   )
}

export default OverlayMenu
