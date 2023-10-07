import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Bodoni_Moda } from 'next/font/google'

const bodoni_moda = Bodoni_Moda({ subsets: ['latin'], weight: '600' })

const NavBar = () => {
  return (
    <ul
      className={`flex flex-row justify-center space-x-3 bg-our-beige ${bodoni_moda.className}`}
    >
      <div className="relative h-10 w-10 px-5 md:px-10 bg-our-beige">
        <Image src="/jjb_logo_cropped.png" fill alt="logo" />
      </div>
      <li className="flex flex-col justify-center">
        <Link
          href="/"
          className="font-bold text-md text-dark-green hover:text-[#322B11] hover:underline"
        >
          Home
        </Link>
      </li>
      <li className="flex flex-col justify-center">
        <Link
          href="/contact"
          className="font-bold text-md text-dark-green hover:text-[#322B11] hover:underline"
        >
          {' '}
          Contact
        </Link>
      </li>
      <li className="flex flex-col justify-center">
        <Link
          href="/portfolio"
          className="font-bold text-md text-dark-green hover:text-[#322B11] hover:underline"
        >
          {' '}
          Portfolio
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
