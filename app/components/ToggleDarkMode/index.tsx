'use client'

import { useState, useEffect } from 'react'

export default function ToggleDarkMode(){
    
    const [darkMode, setDarkMode] = useState<boolean>(false)


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
            className='text-black'
            onClick={() => {
                setDarkMode(!darkMode)
                const mode = darkMode == false ?  'dark' : 'light'
                localStorage.setItem('tema', mode)
            }}
        >
            {/* {darkMode == true ? 'Dark' : 'Light'} */}
            você esta no modo {darkMode == true ? 'Dark' : 'Light'}
        </div>
    )
}   