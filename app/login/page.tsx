'use client'
import Image from 'next/image'
import googleIcon from '@/public/Google_icon.png'
import { useMyContext } from '@/providers/theme'

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";
import '@/app/utils/firebase.js'

export default function Login() {

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    function login(){
        signInWithPopup(auth, provider)
        .then((result) => {
            const cred = GoogleAuthProvider.credentialFromResult(result)
            console.log(cred)
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
                  const uid = user.uid;
                  console.log(user.displayName)
                  console.log(user.email)
                  console.log(user.photoURL)
                  // ...
                } else {
                  // User is signed out
                  // ...
                }
              });
        })
      .catch((error) => {
        console.log(error)
      });
    }

    function logout(){
        signOut(auth)
        console.log('LOGOUT')
    }

    const states:any = useMyContext()
    const { theme, toggleTheme} = states

    return(
        <div
            className={`w-full h-full flex items-center justify-center ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'} overflow-y-hidden lg:px-[270px]`}
        >
            <div
                className={`${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'} w-[80%] p-6 rounded-[8px]`}
            >
                <div
                    onClick={() => login()}
                    className={`w-full p-4 ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'} flex rounded-[8px] items-center justify-around`}
                >
                    <p
                        className={`${theme == 'light' ? 'text-black' : 'text-white'} text-[14px]`}
                    >Login com o Google</p>
                    <Image
                        src={googleIcon}
                        width={40}
                        height={40}
                        alt='google icon'
                    />
                </div>
            </div>
        </div>
    )
}