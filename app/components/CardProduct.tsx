import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'

interface Products {
    image: string,
    descont: string,
    price: string,
    index: number,
    starNumber: number,
    id: string,
}


export default async function CardProduct(props: Products) {
    return(
            <div
                className="flex justify-center items-center flex-col w-9/12 h-[290px] bg-h-white-200 mb-10 p-3 pb-1 rounded-[8px] relative overflow-hidden flex-grou-[1]"
            >
                <Link href={`/product/${props.id}`}>
                    <HiOutlineInformationCircle
                        className='absolute top-0 left-0 text-black text-[32px] p-1 bg-h-white-200 rounded-[50%]'
                    />
                </Link>

                <p
                className={`text-black text-1xl block text-center mt-5 w-auto mx-auto p-2 ${Number(props.descont) >= 35 ? 'bg-green-400' : 'bg-red-400'} rounded-bl-3xl absolute -top-5 right-0 px-3`}>
                    {props.descont}%
                </p>

                <Image
                    alt={props.price}
                    src={props.image}
                    width={250}
                    height={175}
                    className='mx-auto rounded-[8px]'
                />
                
                <div className="flex justify-between items-center w-full mt-2 h-auto">

                    <p className="line-through text-black px-2 ps-2 opacity-70 text-[18px] flex-grow text-left">
                        {props.price}
                    </p>

                    <p className="pe-2 text-[22px] text-black flex-grow text-right">
                        {(Number(props.price) - ((Number(props.price)/100) * Number(props.descont))).toFixed(2)}
                    </p>
                </div>

                <div
                className="flex flex-row-reverse w-full"
            >
                {props.starNumber == 1 && (
                    <HiStar className='text-[26px] text-h-gray-300 p-1' />
                )}
                {props.starNumber == 2 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}
                {props.starNumber == 3 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}
                {props.starNumber == 4 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}
                {props.starNumber == 5 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}

                {props.starNumber == 0 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}
                
                {props.starNumber == -1 && (
                    <>
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                        <HiStar className='text-[26px] text-h-gray-300 p-1' />
                    </>
                )}
                
            </div>

                <p
                className="text-black uppercase text-[12px] mt-2 text-center w-full my-2 mx-auto p-3 bg-h-white-100 rounded-[8px]">
                ADICIONAR ao Carrinho
                </p>
            </div>
    )
}