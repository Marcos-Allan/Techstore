import CardProduct from "@/app/components/CardProduct"

async function getData(){
    const res = await fetch('https://techstore-backend.onrender.com/products/')
    
    const data = await res.json()
    return data
    // console.log(JSON.stringify(data))

    // if(!res.ok){
    //   console.log("Falha ao carrgar Dados")
    //   const data = { message: 'Falha na conexão ao MongoDB verifique a URL' }
    //   return data
    // }
    
} 

interface Products {
  image: string,
  descont: string,
  price: string,
}
  
import { Suspense } from 'react'
import Loading from "./components/CardProduct/loading"
import Message from "./components/Message"
import ToggleDarkMode from "./components/ToggleDarkMode"
import Categories from "./components/Categories"

export default async function Home() {

  const produtos = await getData()

  return (
    <div className='bg-h-white-100 overflow-y-scroll w-full min-h-full overflow-x-hidden flex flex-col flex-wrap justify-center wrap items-center pt-4'>
      <ToggleDarkMode />
      <Categories />
      {produtos.map((product:Products, index:number) => (
        <Suspense fallback={<Loading />}>

          <CardProduct
            descont={product.descont}
            image={product.image}
            price={product.price}
            key={index}
            index={index}
          />
        </Suspense>
      ))}
      <Message />
    </div>
  )
}
