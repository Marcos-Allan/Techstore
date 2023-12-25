import CardProduct from "@/app/components/CardProduct"
import { getProducts } from "./actions"

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
import SideNav from "./components/SideNav"

export default async function Home() {

  const produtos = await getProducts()

  return (
    <div className="relative h-screen flex flex-row">
      <SideNav />
      <Screen>
        <Categories />
        {produtos.map((product:Products, index:number) => (
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
        {/* <Message /> */}
        <ScrollToTop />
      </Screen>
    </div>
  )
}
