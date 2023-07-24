const mongoose = require('mongoose');
const ProductSchema=new mongoose.Schema({
    productName:{type:String, required:true},
    productQuantity:{type:String, required:true},
})
const OrderSchema=new mongoose.Schema({
    id:{type:String, required:true},
    userId:{type:String, required:true},
    products:[ProductSchema]
})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
