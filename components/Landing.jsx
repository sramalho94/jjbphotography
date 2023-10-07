'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { Great_Vibes } from 'next/font/google'

const great_vibes = Great_Vibes({ subsets: ['latin'], weight: '400' })

const slides = [
  '/banner1.jpeg',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpeg',
  '/banner5.jpeg'
]

const Landing = () => {
  const [current, setCurrent] = useState(0)

  const prevStep = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextStep = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    setTimeout(nextStep, 4000)
  }, [current])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <div className="relative flex flex-col items-center justify-center h-auto mt-8">
      <div className="absolute text-lg  z-10 left-0 -mt-10 h-full">
        <h1
          className={`text-3xl font-GreatVibesRegular font-extrabold mb-30 md:text-4xl text-our-beige shadow-xl ${great_vibes.className} z-10`}
        >
          JJB Photography
        </h1>
      </div>

      <div className="slider relative z-0">
        {slides.map((slide, index) => (
          <div
            style={{ display: index === current ? 'block' : 'none' }}
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <img
              className="image min-w-screen object-cover z-0"
              src={slide}
              alt=""
            />
            <FaChevronCircleLeft
              className="circle text-silver absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 text-our-beige"
              onClick={prevStep}
            />
            <FaChevronCircleRight
              className="chevron text-silver absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 text-our-beige"
              onClick={nextStep}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing
