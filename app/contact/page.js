import React from 'react'
import {useState} from 'react'

//incorporate email.js 


const page = () => {

  const initialFormValues={
    firstName:"",
    lastNane:"",
    phone:"",
    email:"",
    comment:""
  }

  const [formValues,setFormValues]= useState(initialFormValues)

  const handleChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
const sendEmail=(e)=>{
  e.preventDefault()
  handleSubmit()
}
  let handleSubmit=()=>{
    setFormValues(initialFormValues)
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fffef2]">
      <div className="bg-white p-10 rounded-lg shadow-md px-24">
        <h1 className="text-3xl font-bold mb-5 text-center text-[#D4CAA3]">Contact Me</h1>
        <form className="flex flex-col items-center space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label className="text-[#D4CAA3]"htmlFor="firstName">First Name</label>
            <input onChange={handleChange} value={formValues.firstName} id="firstName" type="text" required placeholder="First Name" className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#D4CAA3]" htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} value={formValues.lastName} id="lastName" type="text" placeholder="Last Name" className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#D4CAA3]" htmlFor="phone">Phone Number</label>
            <input onChange={handleChange} value={formValues.phone}id="phone" type="tel" required placeholder="Phone Number" className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#D4CAA3]" htmlFor="email">Email</label>
            <input onChange={handleChange} value={formValues.email} id="email" type="email" required placeholder="Email" className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-[#D4CAA3]" htmlFor="comment">Comment</label>
            <textarea onChange={handleChange} value={formValues.comment}rows={8} id="comment" type="comment" required placeholder="How can I help you?" className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-full"></textarea>
          </div>
          <button type="submit" className="bg-[#D4CAA3] hover:bg-[#322b11] text-white px-6 py-2 rounded font-medium">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page
