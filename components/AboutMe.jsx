import React from 'react'

const AboutMe = () => {
  return (
    <div className="text-center py-8">
    
      <div className="my-3">
        <div className="flex flex-col md:flex-row">
        <div className="w-48 h-48 mx-6 relative mb-8">
          <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-our-beige"></div>
          <div className="w-full h-full absolute top-6 left-6 bg-orange-400"></div>
        </div>
          <div className=" px-3 md:flex-1">
          <span className="font-bold text-xl  italic">Hi, I'm Jessica!</span>
            <p className="mt-8 text-sm text-left pb-5">
            I have a unique passion for capturing the essence of those who often feel unseen. Through my photography, I create a space where
              every moment, big or small, is beautifully preserved, just as it
              unfolds.
            </p>
            <a href="/aboutme" className="bg-our-beige text-dark-green  hover:bg-pewter hover:text-white px-1 md:px-8 py-2 rounded font-medium">Learn More</a>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default AboutMe
