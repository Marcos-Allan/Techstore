import Product from "@/models/Product"

export async function getAll(req, res) {
    const products = await Product.find()
    res.send(products)
}