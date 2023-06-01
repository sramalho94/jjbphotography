import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <ul className="flex flex-row justify-start space-x-3 bg-akaroa py-3">
      <div className="relative h-10 w-10 px-5 md:px-10">
        <Image src="/logo.svg" fill alt="logo" />
      </div>
      <li className="flex flex-col justify-center">
        <Link
          href="/"
          className="font-bold text-md  hover:text-dark-green hover:underline"
        >
          Home
        </Link>
      </li>
      <li className="flex flex-col justify-center">
        <Link
          href="/contact"
          className="font-bold text-md  hover:text-dark-green hover:underline"
        >
          {' '}
          Contact
        </Link>
      </li>
      <li className="flex flex-col justify-center">
        <Link
          href="/portfolio"
          className="font-bold text-md  hover:text-dark-green hover:underline"
        >
          {' '}
          Portfolio
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
