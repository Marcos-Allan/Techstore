'use client'
import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import ToggleDarkMode from './ToggleDarkMode';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useThemeContext } from '@/providers/theme'

export default function Menu() {
    const states:any = useThemeContext()
    const { theme, toggleTheme} = states
    
    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false)

    function isProductInfo(){
        if(pathname == '/'){
            return false
        }else if(pathname == ('/product/656b56902a3681082eaae293') || ('/product/6574d8af7fa62604260bd7ab') || ('/product/65772915ecb548f507f05657') || ('/product/     65772adaf22a22bae3748983') || ('/product/65772b36f22a22bae374898b') || ('/product/65772b74f22a22bae374898f') || ('/product/65772cec250f13950c848697')){
            return true
        }
    }
    return(
        <>
            <div
                className={`w-full ${isProductInfo() === true ? 'h-[80px]' : 'h-[120px]'}
                fixed top-0 left-0 z-[2] ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'} px-6 py-3 flex justify-around items-center flex-wrap`}
            >
                <Link
                    href={'/'}
                    className='flex-grow-[2]'
                >
                    <h1
                        className={`text-[19px] font-medium ${theme == 'light' ? 'text-black' : 'text-white'}`}
                        >
                        TechStore
                    </h1>
                </Link>

                <div className="flex-grow-[1] flex gap-2">
                    <div className={`flex-1 flex justify-center py-1 items-center rounded-[8px] hover:opacity-50
                    ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}`
                }>
                        <p
                            className={`text-[12px] text-center leading-[15px]
                            ${theme == 'light' ? 'text-white' : 'text-black'}`}
                        >Criar Conta</p>
                    </div>
                    
                    <div className={`flex-1 flex justify-center py-1 items-center
                    rounded-[8px] hover:opacity-50
                    ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}`
                    }>
                        <p
                            className={`text-[12px] text-center
                            ${theme == 'light' ? 'text-white' : 'text-black'}`}
                        >Conecte-se</p>
                    </div>

                    <div
                        onClick={() => setOpen(true)}
                        className="flex justify-center items-center"
                    >
                        <HiOutlineMenu
                            className={`text-[24px] ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'} hover:opacity-50`}
                        />
                    </div>
                </div>

                {isProductInfo() === false && (
                    <div className={`w-full h-[36px] flex mt-3`}>
                        <input
                            type="text"
                            placeholder="pesquisar na techstore"
                            className={`flex-grow-[1] ps-3 h-[36px] leading-5
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                            capitalize rounded-tl-[20px] text-[12px] flex items-center rounded-bl-[36px] placeholder:${theme === 'light' ? 'text-h-gray-300' : 'text-h-white-200'} focus:outline-none`}
                        />
                        <button
                            className={`text-[12px] px-2
                            ${theme == 'light' ? 'text-white' : 'text-black'}
                            ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}
                            rounded-tr-[20px] rounded-br-[20px] hover:opacity-50`}
                        >
                            Pesquisar
                        </button>
                    </div>
                )}
            </div>

            <div
                className={`
                ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                w-full h-[110%]
                block fixed top-0 ${open == true ? '-left-[0%]' : '-left-[100%]'} z-[4] p-5 transition-all
                `}
            >
                <p
                    className={`
                    ${theme == 'light' ? 'text-black' : 'text-white'}
                    text-[24px]`}
                >
                    TechStore Menu
                </p>
                <HiX
                    onClick={() => setOpen(false)}
                    className={`
                    ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                    absolute top-0 right-0 text-[32px]
                    m-5
                    `}
                />
                <ToggleDarkMode />
            </div>
        </>
    )
}