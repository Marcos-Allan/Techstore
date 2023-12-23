'use client'
import { useThemeContext } from '@/providers/theme'
import { useState } from  'react'

export default function Categories(){

    const [category, setCategory] = useState<string>('tudo')

    function handleCategory(categorySet:string){
        if(category == categorySet){
            setCategory('tudo')
            return
        }
        setCategory(categorySet)
    }

    const states:any = useThemeContext()
    const { theme, toggleTheme} = states

    return(
        <div className={`
            ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
            ${theme == 'light' ? 'text-black' : 'text-white'}
            text-[14px] flex justify-between w-10/12 px-2 py-1 rounded-[32px] my-4`}
        >
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${category == 'tudo' && theme == 'light' ? 'bg-h-gray-300 rounded-[32px] text-h-white-100 hover:opacity-50' : ''}
                ${category == 'tudo' && theme == 'dark' ? 'bg-h-white-100 rounded-[32px] text-h-black-500 hover:opacity-70' : ''}
                ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
                onClick={() => handleCategory('tudo')}
            >
                Tudo
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${category == 'tênis' && theme == 'light' ? 'bg-h-gray-300 rounded-[32px] text-h-white-100 hover:opacity-50' : ''}
                ${category == 'tênis' && theme == 'dark' ? 'bg-h-white-100 rounded-[32px] text-h-black-500 hover:opacity-70' : ''}
                ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
                onClick={() => handleCategory('tênis')}
            >
                Tênis
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${category == 'camisas' && theme == 'light' ? 'bg-h-gray-300 rounded-[32px] text-h-white-100 hover:opacity-50' : ''}
                ${category == 'camisas' && theme == 'dark' ? 'bg-h-white-100 rounded-[32px] text-h-black-500 hover:opacity-70' : ''}
                ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
                onClick={() => handleCategory('camisas')}
            >
                Camisas
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${category == 'calças' && theme == 'light' ? 'bg-h-gray-300 rounded-[32px] text-h-white-100 hover:opacity-50' : ''}
                ${category == 'calças' && theme == 'dark' ? 'bg-h-white-100 rounded-[32px] text-h-black-500 hover:opacity-70' : ''}
                ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
                onClick={() => handleCategory('calças')}
            >
                Calças
            </p>
        </div>
    )
}