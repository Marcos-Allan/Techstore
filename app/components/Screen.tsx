'use client'
import { useThemeContext } from "@/providers/theme"

export default function Screen({children}:{children:React.ReactNode}){

    const states:any = useThemeContext()
    const { theme, toggleTheme} = states

    return(
        <div className={`
            ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
            w-full min-h-screen overflow-x-hidden flex flex-wrap flex-row justify-center items-center pt-[80px]
            lg:flex-row
            `}
        >
            {children}
        </div>
    )
}