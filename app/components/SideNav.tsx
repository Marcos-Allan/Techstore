'use client'

import { useMyContext } from "@/providers/theme"
import { HiMoon, HiX, HiSun, HiLogout } from "react-icons/hi"

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
                onClick={() => toggleTheme()}
            >
                <div className='flex items-center gap-3'>
                    {theme == 'light' ? (
                        <HiSun className='text-white' />
                    ):(
                        <HiMoon className='text-black' />
                    )}
                    <p className={`${theme == 'light' ? 'text-white' : 'text-black'}`}>
                        Tema {theme == 'light' ? 'Claro' : 'Escuro'}
                    </p>
                </div>
                
            </button>
            
            {userS.isLogged == true && (

                <button
                    onClick={() => toggleLogin(false, '', '', '')}
                >
                    <div className='flex items-center gap-3'>
                        <HiLogout className={`
                            ${theme == 'light' ? 'text-white' : 'text-black'}
                        `} />
                        <p className={`${theme == 'light' ? 'text-white' : 'text-black'}`}>
                            Logout
                        </p>
                    </div>
                </button>
            )}

            
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
