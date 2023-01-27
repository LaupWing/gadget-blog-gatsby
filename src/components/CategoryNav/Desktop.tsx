import { Link } from "gatsby"
import * as React from "react"
import { Category } from "../../../types"

const Desktop:React.FC<{categories: Category[]}> = ({categories}) => {
   return (
      <nav className='sm:flex flex-col pl-4 hidden'>
         <h2 className='font-bold uppercase mb-4 text-neutral-600'>Blog</h2>
         <ul className='space-y-2 flex flex-col text-neutral-400 '>
            {categories.map(x=>(
               <Link
                  key={x.node.id}
                  to={x.node.uri}
                  className='flex items-center justify-between hover:text-indigo-600 group'
                  activeClassName='text-indigo-600 active'
               >
                  <li className='text-sm uppercase font-bold'>{x.node.name}</li>
                
               </Link>
            ))}
         </ul>
      </nav>
   )
}
export default Desktop
