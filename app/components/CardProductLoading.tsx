import { useMyContext } from "@/providers/theme"

export default function CardProductLoading(){

    const states:any = useMyContext()
    const { theme } = states

    return (
        <div
            className={`
            lex justify-start items-center flex-col w-9/12 h-[290px] mb-10 p-3 pb-1 rounded-[8px] relative overflow-hidden flex-grou-[1] lg:w-4/12 lg:mx-5
            ${theme == 'light' ? 'bg-gray-200 ' : 'bg-gray-600'}
            `}
        >
            {/* CARD */}
            <div
                className={`
                absolute top-[0%] left-[0%] text-[32px] p-1 rounded-[50%] w-[32px] h-[32px] border-[6px] border-solid
                ${theme == 'light' ? 'bg-gray-400' : 'bg-gray-800'}
                ${theme == 'light' ? 'border-gray-200' : 'border-gray-600'}
                animate-pulse
                `}
            >
                {/* INFO BUTTON */}
            </div>
            <p
                className={`
                text-transparent text-1xl block text-center mt-5 mx-auto p-2 rounded-bl-3xl absolute -top-5 right-0 px-3 w-[60px] h-[40px]
                ${theme == 'light' ? 'bg-gray-400' : 'bg-gray-800'}
                animate-pulse
                `}
            >
                {/* INFO DESCONT */}
            </p>

            <div
                className={`
                mx-auto rounded-[8px] w-[250px] h-[148px]
                ${theme == 'light' ? 'bg-gray-300' : 'bg-gray-700'}
                animate-pulse
                `}
                
            >
                {/* CARD IMAGE */}
            </div>
            
            <div
                className={`
                flex justify-between items-center w-full mt-2 h-[20px] mb-[9px]
                ${theme == 'light' ?  'bg-gray-300' : 'bg-gray-700'}
                animate-pulse
                `}
            >
                {/* DIV PRICES */}
            </div>

            <div
                className={`
                flex flex-row-reverse w-full h-[20px] mb-[9px]
                ${theme == 'light' ? 'bg-gray-300' : 'bg-gray-700'}
                animate-pulse
                `}
            >
                {/* STARS PRODUCTS */}
            </div>

            <p
                className={`
                uppercase text-[12px] mt-2 text-center w-full my-2 mx-auto p-3 rounded-[8px] text-transparent
                ${theme == 'light' ?  'bg-gray-400' : 'bg-gray-800'}
                animate-pulse
                `}
            >
                {/* BUTTON ADD CART */}adicionar ao carrinho
            </p>
        </div>
    )
}