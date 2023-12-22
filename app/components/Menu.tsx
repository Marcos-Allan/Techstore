'use client'
import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import ToggleDarkMode from './ToggleDarkMode';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
    
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
                className={`w-full ${isProductInfo() === true ? 'h-[80px]' : 'h-[120px]'} fixed top-0 left-0 z-[2] bg-h-white-200 px-6 py-3 flex justify-around items-center flex-wrap`}
            >
                <Link
                    href={'/'}
                    className='flex-grow-[2]'
                >
                    <h1
                        className="text-[19px] font-medium text-black"
                        >
                        TechStore
                    </h1>
                </Link>

                <div className="flex-grow-[1] flex gap-2">
                    <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px] hover:opacity-50">
                        <p
                            className="text-[12px] text-center text-white leading-[15px]"
                        >Criar Conta</p>
                    </div>
                    
                    <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px] hover:opacity-50">
                        <p
                            className="text-[12px] text-center text-white"
                        >Conecte-se</p>
                    </div>

                    <div
                        onClick={() => setOpen(true)}
                        className="flex justify-center items-center"
                    >
                        <HiOutlineMenu
                            className="text-[24px] text-h-gray-300 hover:opacity-50"
                        />
                    </div>
                </div>

                {isProductInfo() === false && (
                    <div className="w-full h-[36px] flex mt-3">
                        <input
                            type="text"
                            placeholder="pesquisar na techstore"
                            className="flex-grow-[1] ps-3 h-[36px] leading-5 text-black capitalize bg-h-white-100 rounded-tl-[20px] text-[12px] flex items-center rounded-bl-[36px] placeholder:text-h-gray-300 focus:outline-none"
                        />
                        <button
                            className="text-[12px] px-2 text-white bg-h-gray-300 rounded-tr-[20px] rounded-br-[20px] hover:opacity-50"
                        >
                            Pesquisar
                        </button>
                    </div>
                )}
            </div>

            <div
                className={`w-full h-[110%] bg-h-white-200 block fixed top-0 ${open == true ? '-left-[0%]' : '-left-[100%]'} z-[4] p-5 transition-all`}
            >
                <p
                    className="text-black text-[24px]"
                >
                    TechStore Menu
                </p>
                <HiX
                    onClick={() => setOpen(false)}
                    className='absolute top-0 right-0 text-[32px] text-h-gray-300 m-5'
                />
                <ToggleDarkMode />
            </div>
        </>
    )
}