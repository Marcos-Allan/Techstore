'use client'

import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

import { useState, useEffect } from 'react'
import { useThemeContext } from "@/providers/theme";

export default function ToggleDarkMode(){
    
    const states:any = useThemeContext()
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
            className='flex justify-between items-center gap-3'
            onClick={() => {
                localStorage.setItem('tema', theme)
                toggleTheme()
            }}
        >
            <div
                className={`
                ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}
                hover:opacity-70 transition-opacity p-1 rounded-[50%] flex justify-between items-center flex-row`}
            >
                {theme == 'light'
                    ? <HiSun className='text-white text-[28px]' />
                    : <HiMoon className='text-black text-[28px]' />
                }
            </div>
            <p
                className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                flex-grow-[1] text-left
                `}
            >
                Você Esta No Modo {theme == 'light' ? 'Claro' : 'Escuro'}
            </p>
        </div>
    )
}   