import * as React from "react"
import SlideContainer from "./_SlideContainer"

const Slide1 = () => {
   return (
      <SlideContainer>
         <div className="bg-green-300 m-10 border-2 text-left max-w-md border-black p-6 rounded-xl shadow-hard-lg">
            <h1 className="text-2xl mb-2">Welcome to <strong>TechHeaven</strong></h1>
            <p className="leading-snug">Our objective is to help readers make informed purchasing decisions by providing in-depth reviews, real-world examples, and comprehensive comparisons.</p>
         </div>
      </SlideContainer>
   )
}
export default Slide1