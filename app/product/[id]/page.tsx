import { getProduct } from "@/app/actions"
import ProductSolo from "@/app/components/Product"

export default async function Product({ params }: {params:any}) {
    const product = await getProduct(params.id)

    return(
        <ProductSolo
            price={product.price}
            descont={product.descont}
            image={product.image}
            description={product.description}
        />
    )
}