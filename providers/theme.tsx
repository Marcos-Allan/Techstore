'use client'
import { useState, createContext, useContext } from 'react'

export const MyContext = createContext({})

interface ItemsCart {
    image: string,
    price: string,
    stars: string,
    description: string,
    descont: string,
    keywords: string,
}

export const MyProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = 'light'
    
    const [theme, setTheme] = useState<string | null>(themeAplicked)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [userS, setUserS] = useState<any>({ isLogged: false, name: '', email: '', image: '' })
    const [keyword, setKeyword] = useState<string>('')
    const [itemsCart, setItemsCart] = useState<ItemsCart[]>([{
        price: "60.00",
        descont: "16",
        description: "camisa branca oversized",
        stars: "3",
        image: "https://techstore-backend.onrender.com/uploads/1702308662835.png",
        keywords: "tudo, camisa, camisas, branca, oversized",
    },{
        price: "1230.00",
        descont: "52",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLSqoGFwaniZbMlU3R8OTuOkJH4xQxHb_Mv9J0dHyKuT5qM_60KYJMMaLafIm3-7cIow&usqp=CAU",
        description: "Tênis Nike Air Max Essential-Branco Puro",
        stars: "5",
        keywords: "tudo, tênis"
    }
])

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleLogin = (isLogged:boolean, name:string, email:string, image:string) => {
        setUserS({
            isLogged: isLogged,
            name: name,
            email: email,
            image: image
        })
    }

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    
    return (
        <MyContext.Provider value={{ theme, toggleTheme, menuOpen, toggleMenuOpen, userS, toggleLogin, keyword, setKeyword, itemsCart }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)