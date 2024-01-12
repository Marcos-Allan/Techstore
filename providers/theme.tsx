'use client'
import { saveCookiesTheme } from '@/app/actions'
import { useState, createContext, useContext } from 'react'

export const MyContext = createContext({})

export const MyProvider = ({ children } : { children: React.ReactNode }) => {
    const themeAplicked = window.localStorage.getItem('tema') == 'light' ? 'dark' : 'light'
    
    const [theme, setTheme] = useState<string | null>(themeAplicked ? themeAplicked : 'light')
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [keyword, setKeyword] = useState<string>('tudo')

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const user:any = window.localStorage.getItem('user') 
    ? JSON.parse(window.localStorage.getItem('user') as any)
    : null

    const [userS, setUserS] = useState<any>(user === null
        ?{ isLogged: false, name: '', email: '', image: '' }
        : user
    )

    const toggleLogin = (isLogged:boolean, name:string, email:string, image:string) => {
        setUserS({
            isLogged: isLogged,
            name: name,
            email: email,
            image: image
        })

        window.localStorage.setItem('user', JSON.stringify({
                isLogged: isLogged,
                name: name,
                email: email,
                image: image
            })
        )
    }

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        saveCookiesTheme(theme == 'light' ? 'dark' : 'light')
        window.localStorage.setItem('tema', theme ? theme : 'light')
    }
    
    return (
        <MyContext.Provider value={{ theme, toggleTheme, menuOpen, toggleMenuOpen, userS, toggleLogin, keyword, setKeyword }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)