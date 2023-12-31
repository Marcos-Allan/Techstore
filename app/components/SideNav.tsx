'use client'

import { useMyContext } from "@/providers/theme"
import { HiLogout, HiMoon, HiX } from "react-icons/hi"
import { HiSun } from "react-icons/hi"

export default function SideNav() {
    
    const states:any = useMyContext()
    const { theme, toggleTheme, menuOpen, toggleMenuOpen, userS, toggleLogin } = states
    
    return(
        <div
            className={`
                z-50 h-full justify-start flex-col items-start lg:w-2/12
                ${theme == 'light' ? 'bg-h-black-500' : 'bg-h-white-100'}
                flex
                fixed top-0
                w-full lg:relative lg:left-0
                transition-all duration-500 lg:transition-none lg:duration-0
                ${menuOpen == true ? '-left-0' : '-left-[100%]'}
            `}
        >
            <button
                onClick={() => toggleTheme()}
                className={`py-3 pl-2`}
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
                    className={`py-3 pl-2`}
                >
                    <div className='flex items-center gap-3'>
                        
                        <HiLogout className={`
                            ${theme == 'light' ? 'text-white' : 'text-black'}
                        `}
                            />

                        <p className={`${theme == 'light' ? 'text-white' : 'text-black'}`}>
                            Finalizar Sessão
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
