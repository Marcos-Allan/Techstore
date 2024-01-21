'use client'
import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMyContext } from '@/providers/theme'

export default function Menu() {
    const states:any = useMyContext()
    const { theme, toggleTheme, menuOpen, toggleMenuOpen, userS, keyword, setKeyword } = states
    
    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
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
                    lg:px-[270px] lg:left-auto
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
                {userS.isLogged == false ? (
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
                ) :(
                    <div className='flex items-end'>
                        <Image
                            alt='foto de perfil'
                            src={userS.image}
                            width={34}
                            height={34}
                            className={`rounded-[50%] w-[34px] h-[34px]`}
                        />
                        <p
                            className={`${theme == 'light' ? 'text-black' : 'text-white'} opacity-60 text-[10px] ms-1`}
                        >
                            {userS.name}
                        </p>
                    </div>
                )}

                    <div
                        onClick={() => setOpenSearch(true)}
                        className={`
                            flex justify-center py-1 items-center flex-col rounded-[8px] hover:opacity-50 cursor-pointer
                        `}
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
                        onClick={() => toggleMenuOpen()}
                        className="flex lg:hidden justify-center items-center flex-col py-1 rounded-[8px] hover:opacity-50 cursor-pointer"
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
                w-full h-[110%] fixed ${openSearch == true ? 'top-0' : '-top-[110%]'} left-0 z-[51] opacity-95 flex justify-center items-start transition-all duration-500
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
            `}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setKeyword(inputValue)
                        setOpenSearch(false)
                        setInputValue('')
                    }}
                    className={`
                        w-10/12 flex flex-row rounded-[8px] overflow-hidden mt-[100px] justify-center
                    `}
                >
                    <input 
                        type='text'
                        placeholder='pesquisar na techstore'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={`
                            w-10/12 h-[30px] ps-5 outline-none
                            ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            border border-solid ${theme == 'light' ? 'border-black' : 'border-white'}
                            rounded-tl-[8px] rounded-bl-[8px] lg:w-6/12
                            placeholder:${theme == 'light' ? 'text-black' : 'text-white'} placeholder:opacity-80 capitalize
                        `}
                    />
                    <input type='submit'
                        className={`w-[30px] border border-solid h-[30px] flex rounded-tr-[8px] rounded-br-[8px] items-center justify-center
                        ${theme == 'light' ? 'border-black' : 'border-white'}
                        ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                        `}
                        value={
                            'x'
                        }
                        />
                </form>
            </div>

            {/* MENU LATERAL MOBILE */}
        </>
    )
}