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
  console.log(produtos[0]._id)
  console.log(produtos[1]._id)
  console.log(produtos[2]._id)
  console.log(produtos[3]._id)
  console.log(produtos[4]._id)
  console.log(produtos[5]._id)
  console.log(produtos[6]._id)

  return (
    <div className='bg-h-white-100 overflow-y-scroll w-full min-h-screen overflow-x-hidden flex flex-col flex-wrap justify-center wrap items-center pt-[136px]'>
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
