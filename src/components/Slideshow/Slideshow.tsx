import * as React from "react"
import { Carousel } from "react-responsive-carousel"
import Slide1 from "./Slide1"

const Slideshow = () => {
   return (
      <div className="relative">
         <img className="absolute inset-0 opacity-5 w-full h-full object-cover" src="https://i.imgur.com/wblnWBh.png" alt="carousel background" />
         <Carousel 
            showThumbs={false}
            showStatus={false}
            
         >
            <Slide1/>
            <Slide1/>
            <Slide1/>
         </Carousel>
      </div>
   )
}
export default Slideshow
