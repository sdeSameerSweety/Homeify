const mongoose = require('mongoose');

const PaymentSchema= new mongoose.Schema({
    name:{type:String},
    cardNumber:{type:Number},
    expiryMonth:{type:String},
    expiryYear:{type:String},
    cvv:{type:Number},
});
const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    address1:String,
    address2:String,
    paymentInfo:[PaymentSchema],
    orderStatus:Boolean,
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
