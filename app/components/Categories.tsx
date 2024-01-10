'use client'
import { useMyContext } from '@/providers/theme'
import { useState } from  'react'

export default function Categories(){

    const [category, setCategory] = useState<string>('tudo')

    function handleCategory(categorySet:string){
        if(category == categorySet){
            setCategory('tudo')
            setKeyword('tudo')
            return
        }
        setCategory(categorySet)
        setKeyword(categorySet)
    }

    const states:any = useMyContext()
    const { theme, keyword, setKeyword } = states

    return(
        <div className={`
            ${theme == 'light' ? 'bg-h-white-200 text-black' : 'bg-h-gray-300 text-gray-50'}
            text-[14px] flex justify-between w-10/12 px-2 py-1 rounded-[32px] my-4
            lg:w-8/12
            `}
        >
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${theme == 'light' && category == 'tudo' && 'bg-h-gray-300 rounded-[32px] text-gray-50 hover:opacity-50'}
                ${theme == 'dark' && category == 'tudo' && 'bg-h-white-100 rounded-[32px] text-gray-950 hover:opacity-70'}
                `}
                onClick={() => handleCategory('tudo')}
            >
                Tudo
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${theme == 'light' && category == 'tênis' &&  'bg-h-gray-300 rounded-[32px] text-gray-50 hover:opacity-50'}
                ${theme == 'dark' && category == 'tênis' &&  'bg-h-white-100 rounded-[32px] text-gray-950 hover:opacity-70'}
                `}
                onClick={() => handleCategory('tênis')}
            >
                Tênis
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center
                ${theme == 'light' && category == 'camisas' && 'bg-h-gray-300 rounded-[32px] text-gray-50 hover:opacity-50'}
                ${theme == 'dark' && category == 'camisas' && 'bg-h-white-100 rounded-[32px] text-gray-950 hover:opacity-70'}
                `}
                onClick={() => handleCategory('camisas')}
            >
                Camisas
            </p>
            <p
            className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center   
                ${theme == 'light' && category == 'calças' && 'bg-h-gray-300 rounded-[32px] text-gray-50 hover:opacity-50'}
                ${theme == 'dark' && category == 'calças' && 'bg-h-white-100 rounded-[32px] text-gray-950 hover:opacity-70'}
                `}
                onClick={() => handleCategory('calças')}
            >
                Calças
            </p>
        </div>
    )
}