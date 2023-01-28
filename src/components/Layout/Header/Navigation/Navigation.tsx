import { useLocation } from "@gatsbyjs/reach-router"
import { Link } from "gatsby"
import * as React from "react"
import {FiChevronDown} from "react-icons/fi"
import useMenuQuery from "../../../../hooks/useMenuQuery"
import Dropdown, { DropdownItem } from "./Dropdown"

interface MenuItem {
   id: string
   parentId: string
   url: string
   label: string
   childItems:{
      nodes: DropdownItem[]
   }
}

const Navigation = () => {
   const menu = useMenuQuery()
   const location = useLocation()
   const isBlog = (item: string) => item.includes("blog") && location.pathname.includes("blog")
   
   return (
      <ul className="flex text-neutral-900 capitalize text-sm font-bold space-x-10 tracking-tighter">
         {menu.map((item: MenuItem) => 
            !item.parentId && 
               <div
                  className="relative group"
                  key={item.id}
               >
                  <Link
                     to={item.url}
                     className={`flex items-center relative py-1 ${
                        isBlog(item.url) ? "text-violet-500" : "hover:text-violet-600"
                     }`}
                     activeClassName="text-violet-500"
                  >
                     <li>{item.label}</li>
                     {item.childItems.nodes.length > 0 && (
                        <FiChevronDown 
                           className="duration-200 ml-2 transform group-hover:rotate-180"
                           size={16}
                        />
                     )}
                  </Link>
                  {item.childItems.nodes.length > 0 && <Dropdown
                     items={item.childItems.nodes}
                  />}
               </div>
         )}
      </ul>
   )
}
export default Navigation
