import { Link } from "gatsby"
import * as React from "react"

export interface DropdownItem {
   label: string
   url: string
}

const Dropdown:React.FC<{items: DropdownItem[]}> = ({ items }) => {
   return (
      <ul className="absolute flex-col border-2 rounded border-neutral-600 bg-neutral-700 bottom-0 right-0 transform translate-y-full w-32 text-neutral-200 z-50 hidden divide-y-2 divide-neutral-600 group-hover:flex"
      >
         {items.map(item => (
            <Link
               to={item.url}
               key={item.url}
            >
               <li className="px-2 py-1.5 hover:bg-indigo-600 hover:text-neutral-400">
                  {item.label}
               </li>
            </Link>
         ))}
      </ul>
   )
}
export default Dropdown
