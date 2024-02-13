'use client'
import { HiOutlineInformationCircle, HiStar } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import { useMyContext } from "@/providers/theme";
import { useState } from "react";

interface Products {
    image: string,
    descont: string,
    price: string,
    key: number,
    index: number,
    stars: string,
    keywords: string,
    description: string,
    id: string,
}


export default function CardProduct(props: Products) {
    const states:any = useMyContext()
    const { theme, addProductToCart } = states

    const [added, setAdded] = useState<boolean>(false)

    const handleAdded = () => {
        setAdded(true)
        
        setTimeout(() => {
            setAdded(false)
        }, 250);
    }

    const renderStars = (numStars:number, theme:string) => {
        const starArray = Array.from({ length: numStars }, (_, index) => (
          <HiStar
            key={index}
            className={`text-[26px] ${theme === 'light' ? 'text-h-gray-300' : 'text-h-white-200'} p-1`}
          />
        ));
      
        return <>{starArray}</>;
      };

    return(
            <div
                key={props.key}
                className={`
                    ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                    flex justify-center items-center flex-col w-9/12 h-[290px]
                    mb-10 p-3 pb-1 rounded-[8px] relative overflow-hidden flex-grou-[1]
                    lg:w-4/12 lg:mx-5
                    ${added ? 'scale-90' : ''}
                    transition-transform ease-in-out duration-[200ms]
                `}
            >
                <Link href={`/product/${props.id}`}>
                    <HiOutlineInformationCircle
                        className={`
                            ${theme == 'light' ? 'text-black' : 'text-white'}
                            ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                            absolute top-0 left-0
                            text-[32px] p-1
                            rounded-[50%]
                            hover:scale-[1.2]
                            duration-[200ms]
                            transition-transform
                        `}
                    />
                </Link>

                <p
                className={`
                    text-black
                    text-1xl block text-center mt-5 w-auto mx-auto p-2 ${Number(props.descont) >= 35 ? 'bg-green-400' : 'bg-red-400'} rounded-bl-3xl absolute -top-5 right-0 px-3
                `}>
                    {props.descont}%
                </p>

                <Image
                    alt={props.price}
                    src={props.image}
                    width={250}
                    height={148}
                    className='mx-auto rounded-[8px] w-[250px] h-[148px] object-cover'
                />
                
                <div className="flex justify-between items-center w-full mt-2 h-auto">

                    <p className={`
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                        line-through px-2 ps-2 opacity-70 text-[18px] flex-grow text-left
                    `}>
                        {props.price}
                    </p>

                    <p className={`
                        ${theme == 'light' ? 'text-black' : 'text-white'}
                        pe-2 text-[22px] flex-grow text-right
                    `}>
                        {(Number(props.price) - ((Number(props.price)/100) * Number(props.descont))).toFixed(2)}
                    </p>
                </div>

                <div
                    className="flex flex-row-reverse w-full"
                >   
                {renderStars(Number(props.stars), theme)}
                
            </div>

                <p
                onClick={() => {
                    handleAdded()
                    addProductToCart({ 
                        price: props.price,
                        descont: props.descont,
                        image: props.image,
                        description: props.description,
                        stars: props.stars,
                        keywords: props.keywords
                    })}
                }
                className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                uppercase text-[12px] mt-2 text-center w-full my-2 mx-auto p-3
                rounded-[8px] cursor-pointer
                hover:scale-90
                duration-[200ms]
                transition-transform
                `}>
                adicionar ao carrinho
                </p>
            </div>
    )
}