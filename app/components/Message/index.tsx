'use client';
import { animated, useSpring } from "@react-spring/web"

export default function Message() {

    const props = useSpring({
        x: 0,
        from: { x: -500 },
        to: { x: 0 },
        delay: 2000,
        config:{
            duration: 3000,
        }
    });
    
    return (
        <animated.div
            className="fixed bottom-4 bg-h-white-200 h-auto opacity-90 w-10/12 p-4 overflow-hidden rounded-[8px] pb-[60px] border-[1px] border-solid border-h-gray-300"
            style={{...props}}
        >
            <p
                className="text-black text-center"
            >Parece que você ainda não fez login, faça para aproveitar o maximo possivel dos dados</p>
            <div
                className="absolute w-full bottom-0 left-0 bg-h-gray-300 flex items-center py-2 justify-center h-[46px]"
            >
                <p className="text-center">Fazer Login</p>
            </div>
        </animated.div>
    )
}