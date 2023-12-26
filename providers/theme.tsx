'use client'
import { useState, createContext, useContext } from 'react'

export const MyContext = createContext({})

export const MyProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = localStorage.getItem('tema') == 'light' ? 'dark' : 'light'
    const [theme, setTheme] = useState<string | null>(themeAplicked ? themeAplicked : 'light')

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        localStorage.setItem('tema', theme ? theme : 'light')
    }
    
    return (
        <MyContext.Provider value={{ theme, toggleTheme, menuOpen, toggleMenuOpen }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)