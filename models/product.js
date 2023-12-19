import mongoose, { Schema } from "mongoose";
// import { connectToDatabase } from "../lib/db";

// connectToDatabase()
const productSchema = new Schema(
    {
        price: String,
        descont: String,
        image: String,
    },
    { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
export default Product