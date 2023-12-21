'use client'
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

    return(
        <div className="bg-h-white-200 text-[14px] flex text-black justify-between w-10/12 px-2 py-1 rounded-[32px] my-4">
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center ${category == 'tudo' ? 'bg-h-gray-300 rounded-[32px] text-white hover:opacity-50' : 'text-black'}`}
                onClick={() => handleCategory('tudo')}
            >
                Tudo
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center ${category == 'tênis' ? 'bg-h-gray-300 rounded-[32px] text-white hover:opacity-50' : 'text-black'}`}
                onClick={() => handleCategory('tênis')}
            >
                Tênis
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center ${category == 'camisas' ? 'bg-h-gray-300 rounded-[32px] text-white hover:opacity-50' : 'text-black'}`}
                onClick={() => handleCategory('camisas')}
            >
                Camisas
            </p>
            <p
                className={`flex-grow-[1] text-center h-[32px] flex items-center justify-center ${category == 'calças' ? 'bg-h-gray-300 rounded-[32px] text-white hover:opacity-50' : 'text-black'}`}
                onClick={() => handleCategory('calças')}
            >
                Calças
            </p>
        </div>
    )
}