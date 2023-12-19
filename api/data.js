import { connectToDatabase } from "../app/lib/db";

export default function handler(req, res) {
    try {
        // const db = await connectToDatabase()
        res.status(200).json({ message: 'Conexão com o MongoDB Atlas bem-sucedida!' })
    } catch (error) {
     console.error('Erro ao conectar ao MongoDB: ', error)   
    //  res.status(500).json({ message: 'Erro ao conectar ao MongoDB' })
    }
}