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
    console.log('Before prevStep setCurrent: ', current)
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? slides.length - 1 : prevCurrent - 1
    )
    console.log('After prevStep setCurrent: ', current)
  }

  const nextStep = () => {
    console.log('Before setCurrent: ', current)
    setCurrent((prevCurrent) =>
      prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1
    )
    console.log('After setCurrent: ', current)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('fired nextStep')
      nextStep()
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <div className="relative flex flex-col items-center justify-center mt-8 min-w-screen">
      <div className="slider relative z-0 min-w">
        <div className="absolute text-lg z-10 h-full">
          <h1
            className={`text-3xl font-GreatVibesRegular font-extrabold  md:text-4xl text-our-beige ${great_vibes.className} z-10 h-full -mt-6 ml-3`}
          >
            JJB Photography
          </h1>
        </div>

        {slides.map((slide, index) => (
          <div
            style={{ display: index === current ? 'block' : 'none' }}
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <div className="min-wscreen">
              <img
                className="image w-full object-cover -z-10"
                src={slide}
                alt={index}
                onLoad={() => console.log('Image loaded')}
                onError={() => console.error('Image load error')}
              />
            </div>
            <FaChevronCircleLeft
              className="circle text-silver absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 text-our-beige ml-4 text-2xl z-40"
              onClick={() => prevStep()}
            />
            <FaChevronCircleRight
              className="chevron text-silver absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 text-our-beige mr-4 text-2xl z-40"
              onClick={() => nextStep()}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing
