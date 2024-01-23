'use-client'

import { useMyContext } from "@/providers/theme"
import Image from "next/image"
import { HiPlus, HiMinus } from "react-icons/hi";

interface Product{
    price: string,
    descont: string,
    image: string,
    description: string,
    stars: string,
    keywords: string,
    quantidade: number,
}

export default function CartItem(props: Product){
    
    const state:any = useMyContext()
    const { theme, removeProductToCart, increaseProduct, decreaseProduct } = state

    return(
        <div
            className={`
                 relative pb-[50px] w-[340px] lg:w-full min-h-[350px] flex flex-wrap flex-row justify-center items-center p-3 lg:p-1 border lg:border-x-0 lg:border-t-0 m-0
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
            `}
        >
            <Image
                src={props.image}
                alt='imagem do produto'
                width={300}
                height={200}
                className={`rounded-[8px] object-cover`}
            />
            <div
                className={`
                    flex-grow-[1] h-[100%] flex flex-col items-center justify-center
                    ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                `}
            >
                <p
                    className={`
                        text-center
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                    `}
                >{props.description}</p>
                <div
                    className={`flex flex-row justify-between w-[100px]`}
                >
                    <button
                        onClick={() => decreaseProduct({
                            price: props.price,
                            descont: props.descont,
                            image: props.image,
                            description: props.description,
                            stars: props.stars,
                            keywords: props.keywords,
                            quantidade: props.quantidade,
                        })}
                    >
                        <HiMinus
                            className={`
                                ${theme == 'light' ? 'text-black' : 'text-white'}
                            `}
                        />
                    </button>

                    <p className={`
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                    `}>{props.quantidade}</p>
                    
                    <button
                        onClick={() => increaseProduct({
                            price: props.price,
                            descont: props.descont,
                            image: props.image,
                            description: props.description,
                            stars: props.stars,
                            keywords: props.keywords,
                            quantidade: props.quantidade,
                        })}
                    >
                        <HiPlus
                            className={`
                                ${theme == 'light' ? 'text-black' : 'text-white'}
                            `}
                        />
                    </button>
                </div>
            </div>
            <button
                onClick={() => removeProductToCart({
                    price: props.price,
                    descont: props.descont,
                    image: props.image,
                    description: props.description,
                    stars: props.stars,
                    keywords: props.keywords,
                    quantidade: props.quantidade,
                })}
                className={`
                    w-full h-[40px] absolute bottom-0 uppercase
                    ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                    ${theme == 'light' ? 'text-black' : 'text-white'}
                `}
            >
                Remover Produto
            </button>
        </div>
    )
}