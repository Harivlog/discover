import React from 'react'
import Carousel from './Carousel'
const FadeCarousel = () => {
  return (
    <div><Carousel className="">
    <div >
      <img
         className='h-[20rem]'

        src="https://www.w3schools.com/howto/img_snow_wide.jpg"
        alt="img1"
      />
    </div>
    <div>
      <img
         className='h-[20rem]'

        src="https://www.w3schools.com/howto/img_woods_wide.jpg"
        alt="img2"
      />
    </div>
    <div>
      <img
         className='h-[20rem] '
        src="https://www.w3schools.com/howto/img_lights_wide.jpg"
        alt="img3"
      />
    </div>
  </Carousel></div>
  )
}

export default FadeCarousel