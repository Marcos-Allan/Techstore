import { connectMongoDB } from "@/app/lib/mongodb";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB()
        return NextResponse.json({ message: 'Conexão com o MongoDB Atlas bem-sucedida!' }, {status: 200} )
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB: ', error)   
        return NextResponse.json({ message: 'Erro ao conectar ao MongoDB' }, {status: 500})
    }
}