'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

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
    setTimeout(nextStep, 1000)
  }, [slides])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <div className="flex flex-col items-center justify-center h-auto ">
      <div className="mb-20 ">
        <h1 className="text-3xl font-bold mb-30 md:text-4xl">
          JJB Photography
        </h1>
      </div>

      <div className="slider relative">
        {slides.map((slide, index) => (
          <div
            style={{ display: index === current ? 'block' : 'none' }}
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <img
              className="image min-w-screen min-h-screen object-cover z-0"
              src={slide}
              alt=""
            />
            <FaChevronCircleLeft
              className="circle text-silver absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
              onClick={prevStep}
            />
            <FaChevronCircleRight
              className="chevron text-silver absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
              onClick={nextStep}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing
