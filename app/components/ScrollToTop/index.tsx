'use client'

import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop(){
    return (
        <div
            onClick={() => window.scroll(0, 0)}
            className='fixed bg-h-gray-300 right-3 bottom-3 p-3 rounded-[50%] opacity-100 hover:opacity-40'
        >
            <HiArrowNarrowUp
                className='text-[30px]'
            />
        </div>
    )
}