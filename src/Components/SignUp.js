import React from 'react';



function SignUp() {

    return (
    <div className='signUpForm-container'>
    <form action="" className='signUpForm'>
    Full Name:
    <input type="text" placeholder="Full Name.."/>
    Email:
    <input type="text" placeholder="Email.."  />
    Password:
    <input type="password" placeholder="Password.." />
    <button type='submit' className='submit'>Submit</button>
    </form>
    </div>
  )
}

export default SignUp