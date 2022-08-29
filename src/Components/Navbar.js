import React from 'react'

function Navbar() {
  return (
    <div className='navbar'> 
    <ul className='navbar-items'>
    <li>About Us</li>
    <li>Our Services</li>
    <li>Contact Us</li>
    </ul>
    <div className='navbar-btns'>
    <button className='sign-inup btn'>Sign Up</button>
    <button className='sign-in btn'>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar