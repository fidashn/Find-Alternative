import React from 'react'

function SignIn() {
  return (
    <div>
    <form action="" className='signInForm'>
    Email:
    <input type="text" placeholder="Email.."/>
    Password:
    <input type="text" placeholder="Password.."/>
    <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default SignIn