import { HiOutlineMenu } from "react-icons/hi";

export default function Menu() {
    return(
        <div
            className="w-full h-[120px] fixed top-0 left-0 z-50 bg-h-white-200 px-6 py-3 flex justify-around items-center flex-wrap"
        >
            <h1
                className="text-[19px] flex-grow-[2] font-medium text-black"
            >
                TechStore
            </h1>

            <div className="flex-grow-[1] flex gap-2">
                <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px] hover:opacity-50">
                    <p
                        className="text-[12px] text-center text-white leading-[15px]"
                    >Criar Conta</p>
                </div>
                
                <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px] hover:opacity-50">
                    <p
                        className="text-[12px] text-center text-white"
                    >Conecte-se</p>
                </div>

                <div className="flex justify-center items-center">
                    <HiOutlineMenu
                        className="text-[24px] text-h-gray-300 hover:opacity-50"
                    />
                </div>
            </div>

            <div className="w-full h-[36px] flex mt-3">
                <input
                    type="text"
                    placeholder="pesquisar na techstore"
                    className="flex-grow-[1] ps-3 h-[36px] leading-5 text-black capitalize bg-h-white-100 rounded-tl-[20px] text-[12px] flex items-center rounded-bl-[36px] placeholder:text-h-gray-300 focus:outline-none"
                />
                <button
                    className="text-[12px] px-2 text-white bg-h-gray-300 rounded-tr-[20px] rounded-br-[20px] hover:opacity-50"
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}