const mongoose = require('mongoose');
const ProductSchema=new mongoose.Schema({
    productId:{type:String, required:true},
    productQuantity:{type:Number, required:true},
})
const CartSchema=new mongoose.Schema({
    userId:{type:String, required:true},
    products:[ProductSchema]
})

const CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;
