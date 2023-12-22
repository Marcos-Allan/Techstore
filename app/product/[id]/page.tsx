import { getProduct } from "@/app/actions"
import Image from 'next/image'

export default async function Product({ params }: {params:any}) {
    const product = await getProduct(params.id)

    return(
        <div
            className='w-full bg-h-white-200 min-h-[100dvh] max-h-[calc(100dvh-121px)] relative overflow-y-hidden pt-[80px]'
        >
            <Image
                src={product.image}
                alt={product.price}
                width={300}
                height={300}
                className='w-full'
            />
            <div
                className='bg-h-white-200 min-h-screen absolute w-full top-[290px] p-3 rounded-[14px] pb-[300px]'
            >
                <div
                    className="flex justify-between items-center"
                >
                    <p className="text-black opacity-40 line-through text-[20px]">
                        R$ {product.price}
                    </p>
                    <p className="text-black text-[24px]">
                        R$ {(Number(product.price) - ((Number(product.price)/100) * Number(product.descont))).toFixed(2)}
                    </p>
                </div>
                <p className="text-black p-4">
                    Esse tênis é um dos mas comprados do momento estando na moda atual a mais de um ano faz com que sempre que você o utilizar estara dentro da moda
                </p>
            </div>
            <button
                className="bg-h-white-100 w-full p-4 fixed bottom-0 border-t border-solid border-t-h-gray-300"
            >
                <p className="uppercase text-black w-full text-center">adicionar ao carrinho</p>
            </button>
        </div>
    )
}