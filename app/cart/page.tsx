'use client'
import { useMyContext } from "@/providers/theme"
import CardProduct from "../components/CardProduct"
import { useEffect, useState } from "react"

export default function Cart(){

    const states:any = useMyContext()
    const { theme, itemsCart } = states

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        setItems(itemsCart)
    },[])

    return(
        <div
            className={`screen
            ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
            relative
            w-full overflow-x-hidden flex flex-wrap flex-col justify-start items-center pt-[80px]`}
        >
            {items.map((item:any) => (
                <CardProduct
                    image={item.image}
                    keywords={item.keywords}
                    price={item.price}
                    stars={item.cart}
                    descont={item.descont}
                    id='121212'
                    key={1212121}
                    index={122212}
                />
            ))}
        </div>
    )
}