import * as React from "react"
import { useLocation } from "@gatsbyjs/reach-router"
import useMenuQuery from "../../../hooks/useMenuQuery"
import { Link } from "gatsby"

const Footer = () => {
   const menu = useMenuQuery()
   const location = useLocation()
   console.log(menu)
   const isBlog = (item: string) =>
      item.includes("blog") && location.pathname.includes("blog")
   return (
      <footer className="text-neutral-300 py-14 mt-auto">
         <div className="container flex  sm:items-center sm:flex-row flex-col justify-between">
            <div className="flex flex-col">
               <nav>
                  <ul className="flex text-neutral-600 capitalize text-xs font-bold space-x-8 tracking-tighter mb-2">
                     {menu.map(
                        (item: any) =>
                           !item.parentId && (
                              <Link
                                 key={item.id}
                                 to={item.url}
                                 className={`flex items-center group hover:text-indigo-600 relative py-1 ${
                                    isBlog(item.url) ? "text-indigo-600" : ""
                                 }`}
                                 activeClassName="text-indigo-600"
                              >
                                 <li>{item.label}</li>
                              </Link>
                           )
                     )}
                  </ul>
               </nav>
               <p className="text-sm text-neutral-500">
                  © {new Date().getFullYear()} Tech Heaven. All rights reserved
               </p>
            </div>
            <div className="flex sm:mt-0 mt-2 items-center text-neutral-600 space-x-5">
               {/* <AiFillInstagram size={24}/>
               <AiFillYoutube size={24}/> */}
            </div>
         </div>
      </footer>
   )
}
export default Footer
