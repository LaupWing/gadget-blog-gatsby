import * as React from "react"
import { Carousel } from "react-responsive-carousel"
import Slide1 from "./Slide1"

const Slideshow = () => {
   return (
      <Carousel 
         showThumbs={false}
         showStatus={false}
         
      >
         <Slide1/>
         <Slide1/>
         <Slide1/>
      </Carousel>
   )
}
export default Slideshow
