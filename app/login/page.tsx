'use client'
import Image from 'next/image'
import googleIcon from '@/public/Google_icon.png'
import { useThemeContext } from '@/providers/theme'

export default function Login() {

    const states:any = useThemeContext()
    const { theme, toggleTheme} = states
    console.log(theme)

    return(
        <div
            className={`w-full h-full flex items-center justify-center ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'} overflow-y-hidden`}
        >
            <div
                className={`${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'} w-[80%] p-6 rounded-[8px]`}
            >
                <div
                    className={`w-full p-4 ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'} flex rounded-[8px] items-center justify-around`}
                >
                    <p
                        className={`${theme == 'light' ? 'text-black' : 'text-white'} text-[14px]`}
                    >Login com o Google</p>
                    <Image
                        src={googleIcon}
                        width={40}
                        height={40}
                        alt='google icon'
                    />
                </div>
            </div>
        </div>
    )
}