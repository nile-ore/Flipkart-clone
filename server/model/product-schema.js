import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        unique: true,
        type: String,
        required:true,
        
    },
    url:String,
    detailedUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});

const Product = mongoose.model('product',productSchema);

export default Product;