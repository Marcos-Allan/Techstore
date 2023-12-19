import mongoose from 'mongoose'

const DB_PASSWORD='JZPUWhXDHXlVYvGr'
const DB_USER='allanmenezes880'
const mongodburi = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@techstore.jnxr1sz.mongodb.net/`

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongodburi)
        console.log('você logou no MongoDB com êxito')
    } catch (error) {
        console.log('Erro ao tentar se conectar com MongoDB')
    }
}
// mongodb+srv://allanmenezes880:<password>@techstore.jnxr1sz.mongodb.net/