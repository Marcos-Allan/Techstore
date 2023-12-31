'use client'

import { HiX } from "react-icons/hi"
import { useMyContext } from "@/providers/theme"
import Link from 'next/link'
import { useState } from "react"

export default function Message() {
    const states:any = useMyContext()
    const { theme, userS } = states

    const [isOpen, setIsOpen] = useState(true)

    function handleClose(){
        setIsOpen(false)
    }

   return (
        <div
            className={`
                fixed bottom-4 h-auto opacity-90 w-10/12 p-4 overflow-hidden rounded-[8px] pb-[60px] border-[1px] border-solid py-5
                ${userS.isLogged !== false || isOpen == false ? 'opacity-0 hidden' : 'opacity-1 z-[91] block'} 
                ${theme == 'light' ? 'border-h-gray-300 bg-h-white-200' : 'border-h-white-200 bg-h-gray-300'}
                lg:w-8/12
            `}
        >
            <HiX
                onClick={() => handleClose()}
                className={`
                    text-[18px] absolute top-0 right-0 m-1
                    ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                `}
            />
            <p
                className={`
                    text-center
                    ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
            >Parece que você ainda não fez login, faça para aproveitar o maximo possivel dos dados</p>
            <div
                className={`
                    absolute w-full bottom-[0px] left-0 flex items-center py-2 justify-center h-[46px] hover:opacity-70 transition-opacity border-t border-solid
                    ${theme == 'light' ? 'border-h-gray-300 bg-h-white-100' : 'border-h-white-200 bg-h-black-500'}
                `}
            >
                <Link href={`/login`}
                    className={`
                        text-center
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                    `}
                >
                    Fazer Login
                </Link>
            </div>
        </div>
    )
}