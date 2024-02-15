'use client'

import { useMyContext } from "@/providers/theme"
import Link from "next/link"
import { useEffect, useState, useRef } from "react";
import { HiX } from "react-icons/hi";
import { usePathname } from "next/navigation"

export default function Message() {
    const pathname = usePathname()
    const msg:any = useRef()

    const states:any = useMyContext()
    const { theme, userS, messageCancelable, setMessageCancelable } = states

    const [animateDown, setAnimateDown] = useState<boolean>(true)

    const bounceDown = () => {
        setAnimateDown(true)
    }
    
    function removeTemporaryMessage() {
        setTimeout(() => {
            setMessageCancelable(true)
        }, 200);
        
        setTimeout(() => {
            setAnimateDown(false)
            setMessageCancelable(false)
        }, 300000);
    }

    useEffect(() => {
        if(userS.isLogged == false){
            if(pathname == '/login'){
                setAnimateDown(true)
            }else{
                setTimeout(() => {
                    setAnimateDown(false)
                }, 10000);
            }
        }
    },[pathname])

   return (
        <div>
            {userS.isLogged == false && (
                <div
                    ref={msg}
                    className={`
                        fixed right-0 w-full lg:w-[87%] h-[150px] flex justify-center items-center
                        bg-[transparent] transition-all duration-[200ms]
                        ${animateDown == true ? 'bottom-[-150px]' : 'bottom-0'}
                    `}
                >
                        <div
                            className={`flex items-center justify-center w-9/12 relative h-[120px] pb-[84px] p-4 mb-2 rounded-[8px] overflow-hidden
                            ${theme == 'light' ?  'bg-h-white-200' : 'bg-h-gray-300'}
                            opacity-80
                            border border-solid
                            ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
                            `}
                        >

                            <HiX
                                onClick={() => {                        
                                    bounceDown()
                                    removeTemporaryMessage()
                                }}
                                className={`absolute top-0 right-0 
                                text-[24px] p-1 cursor-pointer hover:scale-125 duration-100
                                ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                                `}
                            />

                            <p
                                className={`
                                ${theme == 'light' ? 'text-black' : 'text-white'}
                                text-center pt-[20px] lg:pt-[30px]`}
                            >Faça login para salvar seus dados</p>
                            <Link href='login'
                                className={`
                                absolute w-full bottom-[0px] left-0
                                flex items-center py-2 justify-center h-[46px] hover:opacity-70 transition-opacity duration-[300ms]
                                ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}
                                `}
                            >
                                <p
                                    className={`
                                    text-center
                                    ${theme == 'light' ?  'text-white' : 'text-black'}
                                    `}
                                >
                                    Fazer Login
                                </p>
                            </Link>
                        </div>
                    </div>
                )}
        </div>
    )
}