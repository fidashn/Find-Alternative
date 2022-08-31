import React from 'react';

function ContactUs() {
  return (
    <div className='contactUs-container'>
    <h2 className='contactUs-title'>Contact Us</h2>
    <form action="" className='contactUsForm'>
    Full Name:
    <input type="text" placeholder="Full Name.."/>
    Email:
    <input type="text" placeholder="Email.."/>
    Please type your message:
    <textarea  name="" rows="10" cols="28"></textarea>
    <button type='submit'>Submit</button>
  </form>
    </div>
  )
}

export default ContactUs