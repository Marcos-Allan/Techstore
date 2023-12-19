import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        return NextResponse.json( { message: 'SUCESSO' }, { status: 200} )
    } catch (error) {
        return NextResponse.json( { message: error }, { status: 405} )
    }
}