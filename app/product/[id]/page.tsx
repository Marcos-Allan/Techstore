import { getProduct } from "@/app/actions"
import Image from 'next/image'

export default async function Product({ params }: {params:any}) {
    const product = await getProduct(params.id)

    return(
        <div>
            <p>
                Produto
            </p>
            <Image
                src={product.image}
                alt={product.price}
                width={220}
                height={220}
            />
            <p>R$ {product.price}</p>
            <p>descont: {product.descont}</p>
        </div>
    )
}