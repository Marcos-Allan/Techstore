'use client'

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
            className='flex justify-between flex-col items-center'
        >
            <p
                className='text-black'
            >
                Você Esta No Modo {darkMode == true ? 'Dark' : 'Light'}
            </p>
            <div
                className='bg-h-gray-300 py-1 px-2 mt-4 rounded-[8px] hover:opacity-70 transition-opacity'
                onClick={() => {
                    setDarkMode(!darkMode)
                    const mode = darkMode == false ?  'dark' : 'light'
                    localStorage.setItem('tema', mode)
                }}
            >
                <p
                    className='text-white text-[14px]'
                >{darkMode == true ? 'DARK' : 'LIGHT'} MODE</p>
            </div>
        </div>
    )
}   