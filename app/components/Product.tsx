'use client'
import { useThemeContext } from '@/providers/theme'
import Image from 'next/image'

interface Product{
    price: string,
    descont: string
    image: string,
}

export default function Product(product: Product){

    const states:any = useThemeContext()
    const { theme, toggleTheme} = states

    return(
        <div
            className={`
                bg-h-white-200
                w-full
                min-h-[100dvh] max-h-[calc(100dvh-121px)] relative overflow-y-hidden pt-[80px]
            `}
        >
            <Image
                src={product.image}
                alt={product.price}
                width={300}
                height={300}
                className='w-full'
            />
            <div
                className={`
                    ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                    min-h-screen absolute w-full top-[290px] p-3 rounded-[14px] pb-[300px]
                `}
            >
                <div
                    className="flex justify-between items-center"
                >
                    <p 
                        className={`
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            opacity-40 line-through text-[20px]
                        `}
                    >
                        R$ {product.price}
                    </p>
                    <p
                        className={`
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                            text-[24px]
                        `}
                    >
                        R$ {(Number(product.price) - ((Number(product.price)/100) * Number(product.descont))).toFixed(2)}
                    </p>
                </div>
                <p 
                    className={`${theme == 'light' ? 'text-black' : 'text-white'} p-4`}
                >
                    Esse tênis é um dos mas comprados do momento estando na moda atual a mais de um ano faz com que sempre que você o utilizar estara dentro da moda
                </p>
            </div>
            <button
                className={`
                    ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                    ${theme == 'light' ? 'border-t-h-gray-300' : 'border-t-h-white-200'}
                    w-full p-4 fixed bottom-0 border-t border-solid
                `}
            >
                <p className={`
                    uppercase
                    ${theme == 'light' ? 'text-black' : 'text-white'}
                    w-full text-center
                `}>
                    adicionar ao carrinho</p>
            </button>
        </div>
    )
}