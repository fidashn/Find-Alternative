import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';


function SignIn() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  


  return (
    <>
    <div>
    <form action="" className='signInForm' >
    Email:
    <input type="text" placeholder="Email.."  onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
    Password:
    <input type="password" placeholder="Password.." onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
    <button type='submit' onClick={login}>login</button>
    </form>
    {/* {user?.email} */}

    <button onClick={logout}> Sign Out </button>
    </div>
    </>
  )
}

export default SignIn