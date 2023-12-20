import Image from 'next/image'

interface Products {
    image: string,
    descont: string,
    price: string,
    index: number,
}


export default async function CardProduct(props: Products) {
    return(
        <div
        className="flex justify-center items-center flex-col w-9/12 h-[280px] bg-h-white-200 mb-10 p-3 pb-1 rounded-[8px] relative overflow-hidden"
        >
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

            <p
            className="text-black mt-2 text-center w-full my-2 mx-auto p-2 bg-h-white-100 rounded-[8px]">
            ADD TO CART
            </p>
        </div>
    )
}