'use client'

import { useMyContext } from "@/providers/theme"
import { HiMoon, HiX, HiSun, HiLogout, HiFolderOpen } from "react-icons/hi"
import Link from 'next/link'

export default function SideNav() {
    
    const states:any = useMyContext()
    const { theme, toggleTheme, menuOpen, toggleMenuOpen, toggleLogin, userS } = states
    
    return(
        <div
            className={`
                z-50 h-full items-center justify-start lg:w-2/12
                ${theme == 'light' ? 'bg-h-black-500' : 'bg-h-white-100'}
                flex
                fixed top-0 flex-col
                w-full lg:relative lg:left-0
                transition-all duration-500 lg:transition-none lg:duration-0
                ${menuOpen == true ? '-left-0' : '-left-[100%]'}
            `}
        >
            <button
                className={`lg:w-full flex flex-row justify-center items-center py-3 border-b-2 ${theme == 'light' ? 'border-h-white-200' : 'border-h-gray-300'}`}
                onClick={() => toggleTheme()}
            >
                <div className='flex items-center gap-3 lg:w-[80%] justify-around'>
                    {theme == 'light' ? (
                        <HiSun className='text-white text-left' />
                    ):(
                        <HiMoon className='text-black text-left' />
                    )}
                    <p className={`${theme == 'light' ? 'text-white' : 'text-black'} flex-grow-[1] ms-2 text-left`}>
                        Tema {theme == 'light' ? 'Claro' : 'Escuro'}
                    </p>
                </div>
                
            </button>
            
            {userS.isLogged == true && (

                <button
                    className={`lg:w-full flex flex-row justify-center items-center py-3 border-b-2 ${theme == 'light' ? 'border-h-white-200' : 'border-h-gray-300'}`}
                    onClick={() => toggleLogin(false, '', '', '')}
                >
                    <div className='flex items-center gap-3 lg:w-[80%] justify-around'>
                        <HiLogout className={`
                            ${theme == 'light' ? 'text-white' : 'text-black'}
                            text-left
                        `} />
                        <p className={`${theme == 'light' ? 'text-white' : 'text-black'} flex-grow-[1] ms-2 text-left`}>
                            Logout
                        </p>
                    </div>
                </button>
            )}
            <Link href='/websocket'
                className={`lg:w-full flex flex-row justify-center items-center py-3 border-b-2 ${theme == 'light' ? 'border-h-white-200' : 'border-h-gray-300'}`}
            >
                <div className='flex items-center gap-3 lg:w-[80%] justify-around'>
                    <HiFolderOpen className={`
                        ${theme == 'light' ? 'text-white' : 'text-black'}
                        text-left
                    `} />
                    <p className={`${theme == 'light' ? 'text-white' : 'text-black'} flex-grow-[1] ms-2 text-left`}>
                        WebSocket
                    </p>
                </div>
            </Link>

            
            <button
                onClick={() => toggleMenuOpen()}
            >
                <HiX
                    className={`
                        ${theme == 'light' ? 'text-h-white-200' : 'text-h-black-500'}
                        absolute top-0 right-0 p-1 text-[30px]
                        block lg:hidden
                    `}
                />
            </button>
        </div>
    )
}
