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
  const [sliderRef] = useKeenSlider(
    {
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
          centered: false
        }
      }
    },
    [
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
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )
  return (
    <div className="flex flex-col items-center justify-center h-auto ">
      <div className="mb-20 ">
        <h1 className="text-3xl font-bold mb-30 md:text-4xl">
          JJB Photography
        </h1>
      </div>

      <div className="mx-auto min-w-screen max-w-screen-xl ">
        <div ref={sliderRef} className="keen-slider keen-slider__center ">
          {images.map((image, index) => (
            <div key={index} className="keen-slider__slide ">
              <div className="flex flex-row items-center justify-center min-w-screen">
                <div className="min-w-screen relative flex justify-center h-1/2 w-screen">
                  <Image
                    src={image}
                    alt={`gallery-image-${index}`}
                    width={500}
                    height={500}
                    className="object-cover object-center mx-auto lg:h-96 lg:w-96"
                  />
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
