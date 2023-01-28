import { Link } from "gatsby"
import * as React from "react"
import { Category } from "../../../types"
import Icons from "../Icons"

const Desktop: React.FC<{ categories: Category[] }> = ({ categories }) => {
   return (
      <nav className="sm:flex flex-col px-4 py-6 hidden mb-auto rounded-xl bg-white border-black border-2">
         <h2 className="font-bold uppercase mb-4 text-neutral-900">Blog</h2>
         <ul className="space-y-2 flex flex-col text-neutral-400 ">
            {categories.map(x => (
               <Link
                  key={x.node.id}
                  to={x.node.uri}
                  className="flex items-center justify-between hover:text-violet-500 group"
                  activeClassName="text-violet-600 active"
               >
                  <li className="text-sm uppercase font-bold">{x.node.name}</li>
                  <Icons className="ml-10" name={x.node.name} />
               </Link>
            ))}
         </ul>
      </nav>
   )
}
export default Desktop
