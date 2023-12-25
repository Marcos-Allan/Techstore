'use client'
import { useThemeContext } from "@/providers/theme"
import { HiMoon } from "react-icons/hi"
import { HiSun } from "react-icons/hi"

export default function SideNav() {
    
    const states:any = useThemeContext()
    const { theme, toggleTheme} = states
    
    return(
        <div
            className={`
                w-[0px] z-50 h-full items-start justify-center lg:w-2/12
                ${theme == 'light' ? 'bg-h-black-500' : 'bg-h-white-100'}
                hidden lg:flex
            `}
        >
            <button
                onClick={() => toggleTheme()}
            >
                {theme == 'light' ? (
                    <div className='flex '>
                        <HiMoon
                            className='text-white'
                            />
                        <p
                            className='text-white'
                        >tema</p>
                    </div>
                ) : (
                    
                    <div className='flex '>
                        <HiSun
                            className='text-black'
                            />
                        <p
                            className='text-black'
                        >tema</p>
                    </div>
                )}

            </button>
        </div>
    )
}