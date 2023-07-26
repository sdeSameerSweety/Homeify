const mongoose = require('mongoose');

const PaymentSchema= new mongoose.Schema({
    nameOnCard:{type:String},
    cardNumber:{type:Number},
    expiryMonth:{type:String},
    expiryYear:{type:String},
    cvv:{type:Number},
});
const AddressSchema=new mongoose.Schema({
    addressName:{type:String},
    addressLine1:{type:String},
    addressLine2:{type:String},
    phone:{type:Number},
    city:{type:String},
    state:{type:String},
    pincode:{type:Number},
    isDefault:{type:Boolean}
})

const UserSchema = new mongoose.Schema({
    userId:{type:String,unique:true},
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    address:[AddressSchema],
    paymentInfo:{PaymentSchema},
    orderStatus:Boolean,
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
