import  React  from 'react';


function SignIn() {

  return (
    <div className='signInForm-container'>
    <form action="" className='signInForm' >
    Email:
    <input type="text" placeholder="Email.."  />
    Password:
    <input type="password" placeholder="Password.." />
    <button type='submit' className='submit'>login</button>
    </form>
    </div>
  )
}

export default SignIn