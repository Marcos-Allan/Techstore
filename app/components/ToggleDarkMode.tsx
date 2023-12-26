'use client'

import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

import { useState, useEffect } from 'react'
import { useMyContext } from "@/providers/theme";

export default function ToggleDarkMode(){
    
    const states:any = useMyContext()
    const { theme, toggleTheme} = states

    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('tema') == 'dark' ? true : false)


    useEffect(()=>{
        const themeSaved = localStorage.getItem('tema')
        if(themeSaved == 'light'){
            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    },[darkMode])
    
    return (
        <div
            className='flex justify-center flex-row items-center gap-3'
            onClick={() => {
                localStorage.setItem('tema', theme)
                toggleTheme()
            }}
        >
            <div
                className={`
                ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                hover:opacity-70 transition-opacity rounded-[50%] p-2`}
            >
                {theme == 'light'
                    ? <HiSun className='text-h-gray-300 text-[28px]' />
                    : <HiMoon className='text-h-white-200 text-[28px]' />
                }
            </div>
            <p
                className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                flex-grow-[1] text-left
                w-full ps-3 -ms-[18px] py-[2px] rounded-r-[10px]
                `}
            >
                Você Esta No Modo {theme == 'light' ? 'Claro' : 'Escuro'}
            </p>
        </div>
    )
}   