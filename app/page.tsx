'use client'

import { useState, useEffect, useCallback } from 'react'
import { getProductPage, getProducts } from "@/app//actions"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMyContext } from '@/providers/theme'

interface Products {
  image: string,
  descont: string,
  price: string,
  stars: string,
  keywords: string,
  description: string,
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
  const [loading, setLoading] = useState<boolean>(true)
  const states:any = useMyContext()
  const { keyword, setKeyword, setMessageCancelable, userS } = states
  
  useEffect(() => {
    if(userS.isLogged == false){
      setMessageCancelable(false)
    }else{
      setMessageCancelable(true)
    }
  },[])

  const searchParams = useSearchParams()
  const [page, setPage] = useState<string>(searchParams.get('page')?.toString() ? searchParams.get('page')?.toString() as string : '1')

  const { replace } = useRouter()
  const pathname = usePathname()
  
  const loadProducts = useCallback(async () => {setProdutos([])
    setLoading(true)
    setProdutos([])
    const proods = await getProductPage(page as any, keyword as string)
    setProdutos(proods)
  },[page, keyword])

  useEffect(() => {
    if(produtos && produtos.length >= 1){
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
  },[produtos])

  useEffect(() => {
    setPage('1')
  },[keyword])

  const paramsS = useCallback((page:string, keyword:string) => {
    const params = new URLSearchParams(searchParams)

    if(page){
      params.set('page', page)
    }else{
      setPage('1')
      params.set('page', page)
    }

    if(keyword){
      params.set('keyword', keyword)
    }else{
      setKeyword('tudo')
      params.set('keyword', keyword)
    }

    replace(`${pathname}?${params.toString()}`)
  },[pathname, replace, searchParams, setKeyword])
  
  useEffect(() => {
    paramsS(page, keyword)
    loadProducts()
    console.log('useEffect chamado')
  },[page, keyword, paramsS, loadProducts])
  
  useEffect(() => {
    setKeyword(searchParams.get('keyword')?.toString() ? searchParams.get('keyword')?.toString() : 'tudo')
  },[searchParams, setKeyword])

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
      {loading == false && produtos && produtos.map((product:Products, index:number) => (
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
            description={product.description}
          />
        </Suspense>
      ))}
      {loading == true && (
        <>
          <CardProductLoading />
          <CardProductLoading />
          <CardProductLoading />
          <CardProductLoading />
        </>
      )}
      <Pagination decreasePage={() => alterPage(page, -1)} increasePage={() => alterPage(page, 1)} page={page} limit={produtos} />
    </Screen>
  )
}