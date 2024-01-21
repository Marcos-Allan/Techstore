'use client'
import Image from 'next/image'
import googleIcon from '@/public/Google_icon.png'
import { useState, useEffect } from 'react'
import { useMyContext } from '@/providers/theme'

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut, getRedirectResult } from "firebase/auth";
import '@/app/utils/firebase.js'

export default function Login() {

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    async function login(){
        setLoading(true)
        if(loading == true){
            return
        }else{
            signInWithRedirect(auth, provider)
        }
    }

    function logout(){
        signOut(auth)
        toggleLogin(false, '', '', '')
    }

    const states:any = useMyContext()
    const { theme, userS, toggleLogin} = states

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getRedirectResult(auth).then(function(result) {
            const user = result?.user;
            if(user){
                toggleLogin(true, user?.displayName, user?.email, user?.photoURL)
                setLoading(false)
            }else{
                setLoading(false)
                return
            }
          }).catch(function(error) {
            console.error("Erro durante o login:", error);
          });
    },[auth, toggleLogin])

    return(
        
        <div
        className={`w-full h-full flex items-center justify-center ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'} overflow-y-hidden lg:px-[270px]`}
        >
            {userS.isLogged == false ? (
            <div
                className={`
                w-[80%] max-w-[400px] p-6 rounded-[8px]
                ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                ${loading == false ? 'opacity-100' : 'opacity-60'}
                `}
            >
                <div
                    onClick={() => login()}
                    className={`
                    w-full p-4 flex rounded-[8px] items-center justify-around
                    ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                    ${loading == false ? 'opacity-100' : 'opacity-60'} cursor-pointer
                    `}
                >
                    <p
                        className={`${theme == 'light' ? 'text-black' : 'text-white'} text-[14px]`}
                    >Login com o Google</p>
                    {loading == false ? (
                        <Image
                            src={googleIcon}
                            width={40}
                            height={40}
                            alt='google icon'
                        />
                        ):(
                            <div
                                className='w-10 h-10 border-4 border-h-white-200 border-solid border-t-h-gray-300 rounded-full animate-spin'
                            ></div>
                        )}
                    </div>
                </div>
            ):(
                <div className='flex items-center justify-center flex-col gap-3'>
                    <Image
                        src={userS.image}
                        alt='foto do perfil'
                        width={80}
                        height={80}
                        className={`w-[80px] h-[80px] rounded-[50%]`}
                    />
                    <p
                        className={`
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                        `}
                    >{userS.name}</p>
                    <p
                        className={`
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                    `}
                    >{userS.email}</p>
                    <button
                        onClick={() => logout()}
                        className={`bg-red-500 w-full rounded-[8px] py-2 uppercase text-white text-center`}
                    >Logout</button>
                </div>
            )}
            </div>
    )
}