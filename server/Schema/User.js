const mongoose = require('mongoose');

const PaymentSchema= new mongoose.Schema({
    nameOnCard:{type:String},
    cardNumber:{type:Number},
    expiryMonth:{type:String},
    expiryYear:{type:String},
    cvv:{type:Number},
});
const UserSchema = new mongoose.Schema({
    userId:{type:String,unique:true},
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    address1:String,
    address2:String,
    paymentInfo:PaymentSchema,
    orderStatus:Boolean,
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
