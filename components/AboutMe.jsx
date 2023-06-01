import React from 'react'

const AboutMe = () => {
  return (
    <div className="text-center py-8">
      <span className="font-bold text-xl mb-5 italic">Hi, I'm Jessica!</span>
      <div className="my-3">
        <div className="flex flex-col md:flex-row">
        <div className="w-48 h-48 mx-6 relative">
          <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-our-beige"></div>
          <div className="w-full h-full absolute top-6 left-6 bg-orange-400"></div>
        </div>
          <div className=" px-3 md:flex-1">
            <p className="text-sm text-left pb-4">
            I have a unique passion for capturing the essence of those who often feel unseen. Through my photography, I create a space where
              every moment, big or small, is beautifully preserved, just as it
              unfolds.
            </p>
            <a href="/contact" className="bg-our-beige text-dark-green  hover:bg-pewter hover:text-white px-1 md:px-8 py-2 rounded font-medium">Learn More</a>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default AboutMe
