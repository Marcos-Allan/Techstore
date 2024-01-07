'use client'

import { useState, useEffect } from 'react'
import { getProductPage } from "./actions"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Products {
  image: string,
  descont: string,
  price: string,
  stars: string,
  _id: string
}
  
import { Suspense } from 'react'
import CardProduct from "@/app/components/CardProduct"
import CardProductLoading from "@/app/components/CardProductLoading"
import CategoriesLoading from "@/app/components/CategoriesLoading"
import Categories from "@/app/components/Categories"
import Screen from '@/app/components/Screen'
import Pagination from '@/app/components/Pagination'

export default function Home() {

  const [produtos, setProdutos] = useState<any>()
  
  const searchParams = useSearchParams()
  const [page, setPage] = useState<string>(searchParams.get('page')?.toString() ? searchParams.get('page')?.toString() as string : '1')

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
  }
    
  useEffect(() => {
      loadProducts(page)
      console.log(produtos)
  },[page])

  function increasePage(page:string){
    if(Number(page) >= 3){
      return
    }
    const pageCurrent = Number(page)
    const actual = pageCurrent + 1
    setPage(String(actual))
  }
  
  function decreasePage(page:string){
    if(Number(page) <= 1){
      return
    }
    const pageCurrent = Number(page)
    const actual = pageCurrent - 1
    setPage(String(actual))
  }

  return (
    <Screen>
      <Suspense key={'12'} fallback={<CategoriesLoading />}>
        <Categories />
      </Suspense>
      {produtos && produtos.map((product:Products, index:number) => (
        <Suspense key={index} fallback={<CardProductLoading />}>
          <CardProduct
            descont={product.descont}
            image={product.image}
            price={product.price}
            key={index}
            index={index}
            id={product._id}
            stars={product.stars}
          />
        </Suspense>
      ))}
      <Pagination decreasePage={() => decreasePage(page)} increasePage={() => increasePage(page)} page={page} />
    </Screen>
  )
}