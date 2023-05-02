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
    autoplay: true,
    breakpoints: {
        '(max-width: 640px)': {
          slidesPerView: 1,
          mode: 'free-snap',
          spacing: 15,
          centered: false,
        },
  }, 
},[
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 3500)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]
  )


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-20" style={{marginTop:"-50px"}}>
        <h1 className="text-4xl font-bold mb-30">JJB Photography</h1>
      </div>

      <div className="mx-auto w-full max-w-screen-lg">
        <div ref={sliderRef} className="keen-slider keen-slider__center ">
          {images.map((image, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="flex flex-row items-center justify-center">
                <div className="w-1/2">
                  <Image
                    src={image}
                    alt={`gallery-image-${index}`}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-1/2 px-4">
                  <p className="text-lg">Some text here</p>
                  <p className="text-sm">Some more text here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



export default Landing