import * as React from "react"

export interface DropdownItem {
   label: string
   url: string
}

const Dropdown = () => {
   return (
      <ul className="absolute flex-col border-2 rounded border-neutral-600 bg-neutral-700 bottom-0 right-0 transform translate-y-full w-32 text-neutral-200 z-50 hidden group-hover:flex">

      </ul>
   )
}
export default Dropdown
