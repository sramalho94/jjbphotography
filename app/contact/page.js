import React from 'react'

const page = () => {
  return <div className='flex flex-col justify-center my-auto'> 
    <div className=" flex justify-center p-10 my-auto">
 
    <h1 >Contact Me</h1>
    </div>
    <form className="flex flex-col mx-auto justify-center">
      <div className=" flex flex-col mx-auto ">
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" required placeholder="First Name"></input>
      </div>
      <div className=" flex flex-col mx-auto">
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" placeholder="Last Name"></input>
      </div>
      <div className=" flex flex-col mx-auto">
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" required placeholder="Phone Number"></input>
      </div>
      <div className=" flex flex-col mx-auto">
      <label for="email">Email</label>
      <input id="email" type="email"  required placeholder="Email"></input>
      </div>
      <div className=" flex flex-col mx-auto">
      <label for="comment">Comment</label>
      <textarea className="flex flex-col mx-auto"rows={5}id="comment" type="comment"  required placeholder="How can I help you?"></textarea>
      </div>
      <button type ="submit">Submit</button>
    </form>
  </div>
}

export default page
