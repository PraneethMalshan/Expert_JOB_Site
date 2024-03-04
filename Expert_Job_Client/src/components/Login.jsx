import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithPopup(auth, GoogleProvider) .then((result) => {
          
            const user = result.user;
            console.log(user);
            
          }).catch((error) => {
            
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

  return (
    <div className='flex items-center justify-center h-screen'>
      <button className='bg-blue-500 , px-2 , py-2 , text-white' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
