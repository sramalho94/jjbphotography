import React from 'react'
import Image from 'next/image'
import { Great_Vibes, Bodoni_Moda } from 'next/font/google'

const great_vibes = Great_Vibes({ subsets: ['latin'], weight: '400' })
const bodoni_moda = Bodoni_Moda({ subsets: ['latin'], weight: '600' })

const AboutMe = () => {
  return (
    <div className="text-center py-8 mb-14">
      <span
        className={`font-bold text-4xl mb-5 italic ${great_vibes.className} text-our-beige`}
      >
        Hi, I'm Jessica!
      </span>
      <div className="my-3 mx-3 md:mx-24">
        <div className="flex flex-col md:flex-row">
          <div className="bg-dark-purpe h-32 w-32 mx-auto mb-8 relative md:h-48 md:w-48 border border-our-beige">
            <Image src="/JJB_Pofile_Pic.jpg" fill alt="JJB Profile" />
          </div>
          <div className="px-3 md:flex-1 md:my-auto">
            <p
              className={`text-sm text-left pb-4 ${bodoni_moda.className} text-our-beige text-center md:text-xl`}
            >
              I have a unique passion for capturing the essence of those who
              often feel unseen. Through my photography, I create a space where
              every moment, big or small, is beautifully preserved, just as it
              unfolds.
            </p>
            <a
              href="/contact"
              className="bg-dark-purpe text-our-beige border border-our-beige px-1 md:px-8 py-2 rounded font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
