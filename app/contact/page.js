import React from 'react'

const page = () => {
  return <div> 
    <form>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" required placeholder="First Name"></input>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" placeholder="Last Name"></input>
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" required placeholder="Phone Number"></input>
      <label for="email">Email</label>
      <input id="email" type="email"  required placeholder="Email"></input>
      <label for="comment">Comment</label>
      <input id="comment" type="comment"  required placeholder="Comment"></input>
      <button type ="submit">Submit</button>
    </form>
  </div>
}

export default page
