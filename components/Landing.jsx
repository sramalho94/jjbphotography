'use client'

import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const images = [
  '/banner1.jpeg',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpeg',
  '/banner5.jpeg'
]

const Landing = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    duration: 4000,
    slidesPerView: 1,
    mode: 'snap',
    autoplay: true
  })

  return (
    <div>
      <div>
        <h1>JJB Photography</h1>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide ">
            <Image
              src={image}
              alt={`gallery-image-${index}`}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing
