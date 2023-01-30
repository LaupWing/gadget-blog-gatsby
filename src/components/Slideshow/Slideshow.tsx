import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Carousel } from "react-responsive-carousel"
import Slide1 from "./Slide1"

const Slideshow = () => {
   return (
      <div className="relative">
         <div className="absolute inset-0">
            <StaticImage
               src="../../images/pattern.png"
               placeholder="blurred"
               quality={95}
               loading="eager"
               className="absolute opacity-20 inset-0 w-full h-full object-cover"
               alt="Blog Hero"
            />
         </div>
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
