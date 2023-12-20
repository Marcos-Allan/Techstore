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
                <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px]">
                    <p
                        className="text-[12px] text-center text-white leading-[15px]"
                    >Criar Conta</p>
                </div>
                
                <div className="flex-1 flex justify-center py-1 items-center bg-h-gray-300 rounded-[8px]">
                    <p
                        className="text-[12px] text-center text-white"
                    >Login</p>
                </div>

                <div className="flex justify-center items-center">
                    <p
                        className="text-[12px]"
                    >Menu</p>
                </div>
            </div>

            <div className="w-full h-[36px] flex mt-3">
                <input
                    type="text"
                    placeholder="pesquisar na techstore"
                    className="flex-grow-[1] ps-3 h-[36px] leading-5 text-black capitalize bg-h-white-100 rounded-tl-[20px] text-[12px] flex items-center rounded-bl-[36px] placeholder:text-h-gray-300"
                />
                <button
                    className="text-[12px] px-2 text-white bg-h-gray-300 rounded-tr-[20px] rounded-br-[20px]"
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}