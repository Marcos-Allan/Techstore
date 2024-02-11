'use client'

import { useMyContext } from "@/providers/theme"
import Link from "next/link"
import { HiX } from "react-icons/hi";

export default function Message() {

    const states:any = useMyContext()
    const { theme, userS, messageCancelable, setMessageCancelable } = states

    function removeTemporaryMessage() {
        setMessageCancelable(true)
        setTimeout(() => {
            setMessageCancelable(false)
        }, 300000);
    }

   return (
        <div>
            {messageCancelable == false && (
            <div
                className={`
                    fixed bottom-0 right-0 w-full lg:w-[87%] h-[150px] flex justify-center items-center
                    bg-[transparent]
                `}
            >
                    <div
                        className={`flex items-center justify-center w-9/12 relative h-[120px] pb-[84px] p-4 mb-2 rounded-[8px] overflow-hidden
                        ${theme == 'light' ?  'bg-h-white-200' : 'bg-h-gray-300'}
                        opacity-90
                        `}
                    >

                        <HiX
                            onClick={() => removeTemporaryMessage()}
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