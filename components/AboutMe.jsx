import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className="text-center py-8">
      <span className="font-bold text-xl mb-5 italic">Hi, I'm Jessica!</span>
      <div className="my-3">
        <div className="flex flex-col md:flex-row">
          <div className="bg-red-600 h-32 w-32 mx-auto mb-8 relative">
            <Image src="/JJB_Pofile_Pic.jpg" fill alt="JJB Profile" />
          </div>
          <div className=" px-3 md:flex-1">
            <p className="text-sm text-left pb-4">
              I have a unique passion for capturing the essence of those who
              often feel unseen. Through my photography, I create a space where
              every moment, big or small, is beautifully preserved, just as it
              unfolds.
            </p>
            <a
              href="/contact"
              className="bg-red-500 text-white px-1 md:px-8 py-2 rounded font-medium"
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
