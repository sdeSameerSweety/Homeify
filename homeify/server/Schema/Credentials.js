const mongoose = require('mongoose');


const CredentialsSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
});

const CredentialsModel = mongoose.model('Credentials', CredentialsSchema);
module.exports = CredentialsModel;
