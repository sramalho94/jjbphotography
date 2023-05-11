'use client'

import React from 'react'
import EmailForm from '@/components/Email'
import { useState } from 'react'

//incorporate email.js

const page = () => {
  
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fffef2] ">
     <EmailForm/>
    </div>
  )
}

export default page
