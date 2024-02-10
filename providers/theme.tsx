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
    quantidade: number,
}

export const MyProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = 'light'
    
    const [theme, setTheme] = useState<string | null>(themeAplicked)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [userS, setUserS] = useState<any>({ isLogged: false, name: '', email: '', image: '' })
    const [keyword, setKeyword] = useState<string>('')
    const [itemsCart, setItemsCart] = useState<ItemsCart[]>([])
    const [messageCancelable, setMessageCancelable] = useState<boolean>(false)

    const addProductToCart = (newItem:any) => {
        setItemsCart((items) => [...items, {...newItem, quantidade: 1}])
    }
    
    const removeProductToCart = (newItem:any) => {
        const newItemsCart = itemsCart.filter((item) => item.image !== newItem.image)
        setItemsCart(newItemsCart)
    }

    const increaseProduct = (product:any) => {
        const newItemsCart = itemsCart.map((item) =>
          item.image === product.image ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      
        setItemsCart(newItemsCart);
    }
    
    const decreaseProduct = (product: any) => {
        const newItemsCart = itemsCart.map((item) =>
          item.image === product.image ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        setItemsCart(newItemsCart);
        if(product.quantidade == 1){
            const newItemsCart = itemsCart.filter((item) => item.image !== product.image)
            setItemsCart(newItemsCart)  
        }
      
      };

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
        <MyContext.Provider value={{ theme, toggleTheme, menuOpen, toggleMenuOpen, userS, toggleLogin, keyword, setKeyword, itemsCart, addProductToCart, removeProductToCart, increaseProduct, decreaseProduct, messageCancelable, setMessageCancelable }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)