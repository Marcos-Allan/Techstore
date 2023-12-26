'use client'
import { MyProvider } from "./theme";

export const Provider = ({ children } : { children:React.ReactNode }) => {
    return (
        <>
            <MyProvider>{children}</MyProvider>
        </>
    )
}
