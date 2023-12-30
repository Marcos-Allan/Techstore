'use client'
import { useState, useEffect } from 'react'
import CardProduct from "@/app/components/CardProduct"
import { getProducts, getProductPage } from "./actions"

interface Products {
  image: string,
  descont: string,
  price: string,
  _id: string
}
  
import { Suspense } from 'react'
import CardProductLoading from "./components/CardProductLoading"
import Categories from "./components/Categories"
import ScrollToTop from "./components/ScrollToTop"
import Screen from "./components/Screen"

export default function Home() {
  const [produtos, setProdutos] = useState<any>()
  const [page, setPage] = useState<number>(1)

  async function loadProducts(){
     const proods = await getProductPage(page)
     setProdutos(proods)
     return
  }

  useEffect(() => {
    loadProducts()
  },[page])

  return (
      <Screen>
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
        <div onClick={() => setPage(page - 1)}>diminuir</div>
        <p>{page}</p>
        <div onClick={() => setPage(page + 1)}>aumentar</div>
        {/* <Message /> */}
        <ScrollToTop />
      </Screen>
  )
}