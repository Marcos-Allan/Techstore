'use client'
import { useMyContext } from "@/providers/theme"

export default function Screen({children}:{children:React.ReactNode}){
    
    const states:any = useMyContext()
    const { theme } = states

    return(
        <div
            className={`
                screen
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                relative
                w-full min-h-screen overflow-x-hidden flex flex-wrap flex-row justify-center items-center pt-[80px]
                lg:flex-row scrollbar-none lg:scrollbar-thin
                ${theme == 'light'
                    ? 'lg:scrollbar-track-h-white-200 lg:scrollbar-thumb-h-gray-300'
                    : 'lg:scrollbar-track-h-gray-300 lg:scrollbar-thumb-h-white-200'
                }
            `}
        >
            {children}
        </div>
    )
}