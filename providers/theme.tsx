'use client'
import { useState, createContext, useContext } from 'react'

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = localStorage.getItem('tema') == 'light' ? 'dark' : 'light'
    const [theme, setTheme] = useState<string | null>(themeAplicked ? themeAplicked : 'light')
    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)