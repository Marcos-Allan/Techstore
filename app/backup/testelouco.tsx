// 'use client'

// import { useState, useEffect } from 'react'
// import { getProductPage } from "@/app//actions"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"

// interface Products {
//   image: string,
//   descont: string,
//   price: string,
//   stars: string,
//   keywords: string,
//   _id: string,
// }
  
// import { Suspense } from 'react'
// import CardProduct from "@/app/components/CardProduct"
// import CardProductLoading from "@/app/components/CardProductLoading"
// import CategoriesLoading from "@/app/components/CategoriesLoading"
// import Categories from "@/app/components/Categories"
// import Screen from '@/app/components/Screen'
// import Pagination from '@/app/components/Pagination'
// import { useMyContext } from '@/providers/theme'

// export default function Home() {

//   const [produtos, setProdutos] = useState<any>()
//   const states:any = useMyContext()
//   const { keyword } = states
  
//   const searchParams = useSearchParams()
//   const [page, setPage] = useState<string>(searchParams.get('page')?.toString() ? searchParams.get('page')?.toString() as string : '1')

//   const { replace } = useRouter()
//   const pathname = usePathname()
  
//   async function loadProducts(){
//     const proods = await getProductPage(page as any, keyword as string)
//     setProdutos(proods)
//   }

//   function paramsS(page:string, keyword:string){
//     const params = new URLSearchParams(searchParams)

//     if(page){
//       params.set('page', page)
//     }else{
//       params.delete('page')
//     }

//     if(keyword){
//       params.set('keyword', keyword)
//     }else{
//       params.delete('keyword')
//     }

//     replace(`${pathname}?${params.toString()}`)
//   }
    
//   useEffect(() => {
//       paramsS(page, keyword)
//       loadProducts()
//       console.log('useEffect chamado')
//   },[page, keyword])
  
//   useEffect(() => {
//       setPage('1')
//   },[keyword])

//   function alterPage(page:string, number:number){
//     const pageCurrent = Number(page)
//     const actual = pageCurrent + number
//     setPage(String(actual))
//   }

//   return (
//     <Screen>
//       <Suspense fallback={<CategoriesLoading />}>
//         <Categories />
//       </Suspense>
//       {produtos && produtos.map((product:Products, index:number) => (
//         <Suspense key={index} fallback={<CardProductLoading />}>
//           <CardProduct
//             descont={product.descont}
//             image={product.image}
//             price={product.price}
//             key={index}
//             index={index}
//             id={product._id}
//             stars={product.stars}
//             keywords={product.keywords}
//           />
//         </Suspense>
//       ))}
//       <Pagination decreasePage={() => alterPage(page, -1)} increasePage={() => alterPage(page, 1)} page={page} limit={produtos} />
//     </Screen>
//   )
// }