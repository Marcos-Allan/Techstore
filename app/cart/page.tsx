'use client'
import { useMyContext } from "@/providers/theme"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"

export default function Cart(){

    const states:any = useMyContext()
    const { theme, itemsCart, menuOpen, toggleMenuOpen } = states

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        setItems(itemsCart)
        if(menuOpen == true){
            toggleMenuOpen()
        }else{
            return
        }
    },[itemsCart])

    return(
        <div
            className={`
                screen
                ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
                relative
                w-full h-[100%-80px] overflow-x-hidden flex flex-row flex-wrap justify-center items-start pt-[100px] pb-[70px]
                lg:flex-row scrollbar-none lg:scrollbar-thin overflow-y-scroll
                ${theme == 'light'
                    ? 'lg:scrollbar-track-h-white-200 lg:scrollbar-thumb-h-gray-300'
                    : 'lg:scrollbar-track-h-gray-300 lg:scrollbar-thumb-h-white-200'
                }
        `}>
            {items.length > 0 ? items.map((item:any) => (
                <CartItem
                    image={item.image}
                    keywords={item.keywords}
                    price={item.price}
                    stars={item.cart}
                    descont={item.descont}
                    description={item.description}
                    quantidade={item.quantidade}
                />
            )): (
                <p className={`
                    text-[20px]
                    ${theme == 'light' ? 'text-black': 'text-white'}
                `}>Sem Items no Carrinho</p>
            )}
            <button className={`
                fixed bottom-0 left-0 w-full h-[50px] text-[18px] uppercase font-medium
                ${theme == 'light' ? 'bg-h-gray-300': 'bg-h-white-200'}
                ${theme == 'light' ? 'text-white': 'text-black'}
            `}>
                finalizar compra
            </button>
        </div>
    )
}