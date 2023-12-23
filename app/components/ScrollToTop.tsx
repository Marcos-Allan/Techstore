'use client'

import { useThemeContext } from "@/providers/theme";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop(){

    const states:any = useThemeContext()
    const { theme, toggleTheme} = states

    return (
        <div
            onClick={() => window.scroll(0, 0)}
            className={`
                ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}
                fixed
                right-3 bottom-3 p-3 rounded-[50%] opacity-100 hover:opacity-40
            `}
        >
            <HiArrowNarrowUp
                className={`
                text-[30px]
                ${theme == 'light' ? 'text-h-white-100' : 'text-h-black-500'}
                `}
            />
        </div>
    )
}