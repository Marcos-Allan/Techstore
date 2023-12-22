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

export default async function Home() {

  const produtos = await getProducts()
  console.log(produtos)

  return (
    <div className='bg-h-white-100 overflow-y-scroll w-full min-h-full overflow-x-hidden flex flex-col flex-wrap justify-center wrap items-center pt-4'>
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
    </div>
  )
}
