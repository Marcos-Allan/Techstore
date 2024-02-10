'use client'

import { useMyContext } from "@/providers/theme"
import Link from "next/link"

export default function Message() {

    const states:any = useMyContext()
    const { theme, userS, messageCancelable } = states

   return (
        <div>
            {messageCancelable == false && (
            <div
                className={`
                    fixed bottom-0 right-0 w-full lg:w-[87.1%] h-[150px] flex justify-center items-center
                    ${theme == 'light' ?  'bg-h-white-100' : 'bg-h-black-500'}
                `}
            >
                    <div
                        className={`f
                        lex items-center justify-center w-9/12 relative h-[120px] pb-[84px] p-4 mb-2 rounded-[8px] overflow-hidden
                        ${theme == 'light' ?  'bg-h-white-200' : 'bg-h-gray-300'}
                        `}
                    >
                        <p
                            className={`
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            text-center py-[5px] lg:py-[10px]`}
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