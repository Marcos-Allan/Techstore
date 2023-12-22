'use client'

import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

import { useState, useEffect } from 'react'

export default function ToggleDarkMode(){
    
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('tema') == 'dark' ? true : false)


    useEffect(()=>{
        const theme = localStorage.getItem('tema')
        if(theme == 'dark'){
            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    },[darkMode])
    
    return (
        <div
            className='flex justify-between items-center gap-3'
        >
            <div
                className='bg-h-gray-300 hover:opacity-70 transition-opacity p-1 rounded-[50%] flex justify-between items-center flex-row'
                onClick={() => {
                    setDarkMode(!darkMode)
                    const mode = darkMode == false ?  'dark' : 'light'
                    localStorage.setItem('tema', mode)
                }}
            >
                {darkMode == true ? <HiMoon className='text-white text-[28px]' /> : <HiSun className='text-white text-[28px]' />}
            </div>
            <p
                className='text-black flex-grow-[1] text-left'
            >
                Você Esta No Modo {darkMode == true ? 'Escuro' : 'Claro'}
            </p>
        </div>
    )
}   