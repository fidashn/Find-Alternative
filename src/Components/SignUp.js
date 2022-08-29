// import React from 'react';
// import { useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   } from 'firebase/auth';
// import { auth } from '../firebase';


// function SignUp() {

//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
  

//   const [user, setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//     <form action="" className='signUpForm'>
//     Full Name:
//     <input type="text" placeholder="Full Name.."/>
//     Email:
//     <input type="text" placeholder="Email.."  onChange={(event) => {
//             setRegisterEmail(event.target.value);
//           }}/>
//     Password:
//     <input type="password" placeholder="Password.." onChange={(event) => {
//             setRegisterPassword(event.target.value);
//           }}/>
//     <button type='submit' onClick={register}>Submit</button>
//     </form>
//     </div>
//   )
// }

// export default SignUp