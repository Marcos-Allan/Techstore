'use client'
import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import ToggleDarkMode from './ToggleDarkMode';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useThemeContext } from '@/providers/theme'

export default function Menu() {
    const states:any = useThemeContext()
    const { theme, toggleTheme} = states
    
    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false)
    const [openSearch, setOpenSearch] = useState<boolean>(false)

    function isProductInfo(){
        return true
    }

    return(
        <>
            <div
                className={`
                    ${isProductInfo() === true ? 'h-[80px]' : 'h-[120px]'}
                    ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                    px-6 py-3 flex justify-around items-center flex-wrap w-full fixed top-0 left-0 z-[2]
                `}
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

                <div className="flex-grow-[1] flex gap-4 justify-end items-center">
                    <Link
                        href={'/login'}
                        className={`
                            flex justify-center py-1 items-center flex-col rounded-[8px] hover:opacity-50
                        `}
                    >
                        <HiUserAdd
                            className={`
                                    text-[22px] text-center
                                    ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                                `}
                            />
                        <p
                            className={`
                                text-[8px] text-center
                                ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                            `}
                            >Conecte-se</p>
                    </Link>

                    <div
                        onClick={() => setOpenSearch(true)}
                    >
                        <HiSearch
                            className={`
                                text-[22px] text-center
                                ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                            `}
                        />
                    <p
                        className={`
                            text-[8px] text-center
                            ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                        `}
                        >Pesquisar</p>
                    </div>

                    <div
                        onClick={() => setOpen(true)}
                        className="flex justify-center items-center flex-col"
                    >
                        <HiOutlineMenu
                            className={`
                                text-[22px] text-center
                                ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                            `}
                        />
                    <p
                        className={`
                            text-[8px] text-center
                            ${theme == 'light' ? 'text-h-gray-300' : 'text-h-white-200'}
                        `}
                        >Menu</p>
                    </div>
                </div>

            </div>
                <div className={`
                    w-full h-[110%] fixed ${openSearch == true ? 'top-0' : '-top-[110%]'} left-0 z-50 opacity-95 flex justify-center items-start transition-all duration-500
                    ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                `}>
                <div
                    className={`
                        w-10/12 flex flex-row rounded-[8px] overflow-hidden mt-[100px]
                    `}
                >
                    <input 
                        type='text'
                        placeholder='pesquisar na techstore'
                        className={`
                            flex-grow-[1] h-[30px] ps-5 outline-none
                            ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            border border-solid ${theme == 'light' ? 'border-black' : 'border-white'}
                            rounded-tl-[8px] rounded-bl-[8px]
                            placeholder:${theme == 'light' ? 'text-black' : 'text-white'} placeholder:opacity-80 capitalize
                        `}
                    />
                    <button
                        className={`w-[30px] border border-solid ${theme == 'light' ? 'border-black' : 'border-white'} h-[30px] flex rounded-tr-[8px] rounded-br-[8px] items-center justify-center ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}`}

                    >
                        <HiX
                            onClick={() => setOpenSearch(false)}
                            className={`
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            text-[18px]
                            `}
                        />
                    </button>
                </div>
            </div>

            {/* MENU LATERAL MOBILE */}
            <div
                className={`
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                w-full h-[110%] duration-500
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