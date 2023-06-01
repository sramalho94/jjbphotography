import React from 'react'

const AboutMe = () => {
  return (
    <div className="text-center">
      <span className="font-bold">About Me</span>
      <div className="my-3">
        <div className="flex flex-col md:flex-row">
          <div className="bg-red-600 h-32 w-32 mx-auto mb-8"></div>
          <div className=" px-3 md:flex-1">
            <p className="text-sm text-left">
              I have a unique passion for capturing the essence of those who
              often feel unseen. Through my photography, I create a space where
              every moment, big or small, is beautifully preserved, just as it
              unfolds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
