'use client'

import { useState, useEffect, useCallback } from 'react'
// CLIENT
import { getProductPage } from "@/app//actions"
// SERVER
import { usePathname, useRouter, useSearchParams } from "next/navigation"
// CLIENT
import { useMyContext } from '@/providers/theme'
// CLIENT

interface Products {
  image: string,
  descont: string,
  price: string,
  stars: string,
  keywords: string,
  _id: string,
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
  // CLIENT
  const states:any = useMyContext()
  // CLIENT
  const { keyword } = states
  // CLIENT
  
  const searchParams = useSearchParams()
  // CLIENT
  const [page, setPage] = useState<string>(searchParams.get('page')?.toString() ? searchParams.get('page')?.toString() as string : '1')
  // CLIENT

  const { replace } = useRouter()
  // CLIENT
  const pathname = usePathname()
  // CLIENT
  
  const loadProducts = useCallback(async () => {
    const proods = await getProductPage(page as any, keyword as string)
    setProdutos(proods)
  },[page, keyword])
  // SERVER

  const paramsS = useCallback((page:string, keyword:string) => {
    const params = new URLSearchParams(searchParams)

    if(page){
      params.set('page', page)
    }else{
      params.delete('page')
    }

    if(keyword){
      params.set('keyword', keyword)
    }else{
      params.delete('keyword')
    }

    replace(`${pathname}?${params.toString()}`)
  },[pathname, replace, searchParams])
  //CLIENT
  
  useEffect(() => {
      paramsS(page, keyword)
      loadProducts()
      console.log('useEffect chamado')
  },[paramsS, loadProducts])
  
  useEffect(() => {
      setPage('1')
  },[keyword])

  function alterPage(page:string, number:number){
    const pageCurrent = Number(page)
    const actual = pageCurrent + number
    setPage(String(actual))
  }

  return (
    <Screen>
      <Suspense fallback={<CategoriesLoading />}>
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
            keywords={product.keywords}
          />
        </Suspense>
      ))}
      <Pagination decreasePage={() => alterPage(page, -1)} increasePage={() => alterPage(page, 1)} page={page} limit={produtos} />
    </Screen>
  )
}