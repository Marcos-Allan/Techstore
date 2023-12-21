export default function CardProductLoading(){
    return (
        <div
            className='flex justify-center items-center flex-col w-9/12 h-[280px] bg-transparent my-5 p-3 pb-1 rounded relative overflow-hidden bg-gray-200'
        >
            <p
            className='text-transparent text-1xl block text-center mt-5 mx-auto p-2 rounded-bl-3xl absolute -top-5 right-0 px-3 bg-gray-400 w-[60px] h-[40px]'>
            </p>

            <div
                className='mx-auto rounded w-full h-[157px] bg-gray-300'>
            </div>
            
            <div className="flex justify-between items-center w-full mt-2 h-auto">
            <p className="line-through px-2 ps-2 opacity-70 text-[18px] flex-grow text-left">
            </p>

            <p className="pe-2 text-[22px] flex-grow text-right h-[22px]">
            </p>
            </div>

            <p
            className="mt-2 text-center my-2 mx-auto p-2 bg-gray-400 rounded w-full h-[40px]">
            </p>
        </div>
    )
}