import React from 'react'

const page = () => {
  return <div> 
    <h1>Contact Me</h1>
    <form>
      <div className="w-full flex flex-col">
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" required placeholder="First Name"></input>
      </div>
      <div className="w-full flex flex-col">
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" placeholder="Last Name"></input>
      </div>
      <div className="w-full flex flex-col">
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" required placeholder="Phone Number"></input>
      </div>
      <div className="w-full flex flex-col">
      <label for="email">Email</label>
      <input id="email" type="email"  required placeholder="Email"></input>
      </div>
      <div className="w-full flex flex-col">
      <label for="comment">Comment</label>
      <textarea className="w-full flex flex-col"rows={5}id="comment" type="comment"  required placeholder="How can I help you?"></textarea>
      </div>
      <button type ="submit">Submit</button>
    </form>
  </div>
}

export default page
