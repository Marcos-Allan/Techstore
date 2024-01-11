'use server'
import { cookies } from 'next/headers'

export async function saveCookies(isLogged:boolean, name:string, email:string, image: string) {
    cookies().set('user', JSON.stringify({
        isLogged: isLogged,
        name: name,
        email: email,
        image: image
    }))
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

export async function getProductPage(page:number = 1, keyword:string = 'tudo'){
    const res = await fetch(`https://techstore-backend.onrender.com/product?page=${page}&keyword=${keyword}`)

    const data = await res.json()
    return data
}

export async function getProductTenis(keyword:string){
    const res = await fetch('https://techstore-backend.onrender.com/products/')
    
    const tenis = await res.json()
    const data = tenis.filter((product:any) => product.keywords.includes(keyword))
    return data
}