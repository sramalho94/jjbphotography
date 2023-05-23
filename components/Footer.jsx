import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="mt-10 font-bold fixed inset-x-0 bottom-0 bg-white py-3 px-6 shadow-md flex flex-col sm:flex-row justify-between items-center text-center text-[#D4CAA3] space-y-2 sm:space-y-0 text-sm">
        <span className=" flex flex-row justify-between align-middle">  {'Copyright © JJB Photography ' + year}   <a href="https://www.instagram.com/your_instagram_handle/" target="_blank" rel="noopener noreferrer" className="text-2xl text-{black}">
          <FaInstagram className="pl-2 pb-1"/>
        </a></span>
      

        <span>  {'Website created by S&S LLC.'}</span>
    </footer>
  )
}

export default Footer