'use client'

import { useState, useEffect } from 'react'
import CardProduct from "@/app/components/CardProduct"
import { getProducts, getProductPage } from "./actions"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useMyContext } from "@/providers/theme"

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface Products {
  image: string,
  descont: string,
  price: string,
  _id: string
}
  
import { Suspense } from 'react'
import CardProductLoading from "./components/CardProductLoading"
import Categories from "./components/Categories"

export default function Home() {
  
  const states:any = useMyContext()
  const { theme, toggleTheme} = states

  const [produtos, setProdutos] = useState<any>()
  
  const searchParams = useSearchParams()
  const [page, setPage] = useState<string>(searchParams.get('page')?.toString() as string)
  // const [page, setPage] = useState<string>('1')

  const { replace } = useRouter()
  const pathname = usePathname()
  
  async function loadProducts(term:string){
    const params = new URLSearchParams(searchParams)

    const proods = await getProductPage(page as any)
    setProdutos(proods)
    
    if(term){
      params.set('page', term)
    }else{
      params.delete('page')
    }

    replace(`${pathname}?${params.toString()}`)
    return
  }
    
  useEffect(() => {
      loadProducts(page)
      console.log(produtos)
  },[page])

  function increasePage(){
    if(Number(page) >= 3){
      return
    }
    const pageCurrent = Number(page)
    const actual = pageCurrent + 1
    setPage(String(actual))
  }
  
  function decreasePage(){
    if(Number(page) <= 1){
      return
    }
    const pageCurrent = Number(page)
    const actual = pageCurrent - 1
    setPage(String(actual))
  }

  return (
    <div className={`
      screen
      ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
      relative
      w-full min-h-screen overflow-x-hidden flex flex-wrap flex-row justify-center items-center pt-[80px]
      lg:flex-row scrollbar-none lg:scrollbar-thin
      ${theme == 'light'
          ? 'lg:scrollbar-track-h-white-200 lg:scrollbar-thumb-h-gray-300'
          : 'lg:scrollbar-track-h-gray-300 lg:scrollbar-thumb-h-white-200'
      }
      `}
    >
        <Categories />
        {produtos && produtos.map((product:Products, index:number) => (
          <Suspense fallback={<CardProductLoading />}>
            <CardProduct
              descont={product.descont}
              image={product.image}
              price={product.price}
              key={index}
              index={index}
              starNumber={5-index}
              id={product._id}
            />
          </Suspense>
        ))}
        <div
          className={`
          ${theme == 'light' ?  'bg-h-white-200' : 'bg-h-gray-300'}
          w-10/12 flex flex-row justify-around mb-8 py-2 lg:w-8/12 rounded-[32px]
          `}
        >

          <div onClick={() => decreasePage()}>
            <HiChevronLeft
            className={`
              ${theme == 'light' ? 'text-black' : 'text-white'}
              text-[22px]`}
            />
          </div>

          <p className={`${theme == 'light' ? 'text-black' : 'text-white'}`}>
            {page}
          </p>

          <div onClick={() => increasePage()}>
            <HiChevronRight
              className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                text-[22px]`}
              />
          </div> 
        </div>
      </div>
  )
}