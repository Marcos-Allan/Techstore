import { connectMongoDB } from "@/app/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB()
        const product = await Product.find()
        console.log(product)
        return NextResponse.json(product)
        // send(product)
    } catch (error) {
        return NextResponse.json({ message: 'Erro ao Buscar os Produtos' }, {status: 500})
    }
}