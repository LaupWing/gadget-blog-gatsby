import React, { createContext, useState, Dispatch, SetStateAction, useContext } from "react"

interface State {
   darkMode: boolean
   setDarkMode: Dispatch<SetStateAction<boolean>>
}

const DarkModeContext = createContext<State>({
   darkMode: true,
   setDarkMode: () => {}
}) 

export const DarkModeProvider:React.FC<React.PropsWithChildren> = ({ children }) => {
   const [darkMode, setDarkMode] = useState(true)
   const value = {darkMode, setDarkMode}

   return (
      <DarkModeContext.Provider value={value}>
         {children}
      </DarkModeContext.Provider>
   )
}

export default function useDarkMode() {
   return useContext(DarkModeContext)
}