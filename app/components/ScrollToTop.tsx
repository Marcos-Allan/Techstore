'use client'
import { useLayoutEffect } from 'react'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useMyContext } from "@/providers/theme";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop(){

    const states:any = useMyContext()
    const { theme } = states

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".box", {
            x: 0,
            opacity: 1,
            rotate: '0deg',
            display: 'block',
            scrollTrigger: {
                trigger: document.body,
                start: 'top -200px',
                end: 'bottom 50px',
                scrub: true,
            },
          });
    },[])
    
    return (
        <div
            onClick={() => window.scroll(0, 0)}
            className={`
                box
                ${theme == 'light' ? 'bg-h-gray-300' : 'bg-h-white-200'}
                fixed
                right-3 bottom-3 p-3 rounded-[50%] opacity-0 hover:opacity-40 hidden rotate-180
            `}
        >
            <HiArrowNarrowUp
                className={`
                text-[30px]
                ${theme == 'light' ? 'text-h-white-100' : 'text-h-black-500'}
                `}
            />
        </div>
    )
}