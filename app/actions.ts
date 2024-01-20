'use server'
import { cookies } from 'next/headers'

export async function saveCookiesTheme(tema:string) {
    cookies().set('tema', JSON.stringify(tema))
}

export async function getCookies(name:string) {
    return cookies().get(name)
}

export async function getProducts(){
    const res = await fetch('https://techstore-backend.onrender.com/products/')
    
    const data = await res.json()
    return data
}

export async function getProduct(id:string){
    const res = await fetch(`https://techstore-backend.onrender.com/product/${id}`)

    const data = await res.json()
    return data
}

export async function getProductPage(page:number = 2, keyword:string = 'tudo'){
    const res = await fetch(`https://techstore-backend.onrender.com/product?page=${page}&keyword=${keyword}`, {cache: 'no-store'})

    const data = await res.json()
    return data
}