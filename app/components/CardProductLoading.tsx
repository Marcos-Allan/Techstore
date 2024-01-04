export default function CardProductLoading(){
    return (
        <div
            className='bg-gray-200 flex justify-start items-center flex-col w-9/12 h-[290px]
            mb-10 p-3 pb-1 rounded-[8px] relative overflow-hidden flex-grou-[1]
            lg:w-4/12 lg:mx-5'
        >
            {/* CARD */}
            <div
                className='absolute top-[0%] left-[0%] text-[32px] p-1 rounded-[50%] bg-gray-400 w-[32px] h-[32px] border-[6px] border-solid border-gray-200'
            >
                {/* INFO BUTTON */}
            </div>
            <p
                className='text-transparent text-1xl block text-center mt-5 mx-auto p-2 rounded-bl-3xl absolute -top-5 right-0 px-3 bg-gray-400 w-[60px] h-[40px]'
            >
                {/* INFO DESCONT */}
            </p>

            <div
                className='mx-auto rounded-[8px] w-[250px] h-[148px] bg-gray-300'
            >
                {/* CARD IMAGE */}
            </div>
            
            <div
                className="flex justify-between items-center w-full mt-2 h-[20px] bg-gray-300 mb-[9px]"
            >
                {/* DIV PRICES */}
            </div>

            <div
                className='flex flex-row-reverse w-full h-[20px] bg-gray-300 mb-[9px]'
            >
                {/* STARS PRODUCTS */}
            </div>

            <p
                className="uppercase text-[12px] mt-2 text-center w-full my-2 mx-auto p-3
                rounded-[8px] bg-gray-400 text-transparent"
            >
                {/* BUTTON ADD CART */}adicionar ao carrinho
            </p>
        </div>
    )
}