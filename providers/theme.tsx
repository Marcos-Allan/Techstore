'use client'
import { useState, createContext, useContext } from 'react'

export const MyContext = createContext({})

export const MyProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = 'light'
    
    const [theme, setTheme] = useState<string | null>(themeAplicked)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [keyword, setKeyword] = useState<string>('')

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const [userS, setUserS] = useState<any>({ isLogged: false, name: '', email: '', image: '' }
    )

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
        <MyContext.Provider value={{ theme, toggleTheme, menuOpen, toggleMenuOpen, userS, toggleLogin, keyword, setKeyword }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)