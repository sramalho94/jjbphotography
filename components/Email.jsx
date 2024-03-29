import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Bodoni_Moda } from 'next/font/google'

const KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY
const TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE_ID
const SERVICE = process.env.NEXT_PUBLIC_SERVICE_ID

const bodoni_moda = Bodoni_Moda({ subsets: ['latin'], weight: '400' })

const EmailForm = () => {
  const form = useRef()
  const initialFormValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    comment: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    setFormValues(initialFormValues)
  }

  return (
    <div className={`mt-5 mb-20 ${bodoni_moda.className} min-w-screen`}>
      <div className="bg-white  border-dark-purpe w-80 md:w-96 py-5">
        <h1 className="text-3xl font-bold mb-5 text-center text-dark-green">
          Contact Me
        </h1>
        <form
          className="flex flex-col items-center space-y-4"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mt-5 min-w-screen">
            <label className="text-dark-green" htmlFor="firstName">
              First Name
            </label>
            <input
              onChange={handleChange}
              name="firstName"
              value={formValues.firstName}
              id="firstName"
              type="text"
              required
              placeholder="First Name"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purpe text-black"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-dark-green" htmlFor="lastName">
              Last Name
            </label>
            <input
              onChange={handleChange}
              value={formValues.lastName}
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purple  text-black"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-dark-green" htmlFor="phone">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              value={formValues.phone}
              name="phone"
              id="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purpe  text-black"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-dark-green" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formValues.email}
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purpe  text-black"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-dark-green" htmlFor="email">
              Date of Service
            </label>
            <input
              onChange={handleChange}
              value={formValues.date}
              name="date"
              id="date"
              type="text"
              required
              placeholder="06/01/2023"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purpe  text-black"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-dark-green" htmlFor="comment">
              Comment
            </label>
            <textarea
              onChange={handleChange}
              value={formValues.comment}
              rows={8}
              id="comment"
              type="comment"
              name="comment"
              required
              placeholder="How can I help you?"
              className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-dark-purpe w-full  text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#D4CAA3] hover:bg-dark-purpe text-white px-6 py-2 rounded font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmailForm
