const express = require('express');
const cors = require('cors');
const fs = require('fs');
const {mongoose, models } = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const Credentials=require("./Schema/Credentials");
const User = require ("./Schema/User");
const bcrypt = require('bcryptjs');
const { error } = require('console');
const port = process.env.port;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:[process.env.PUBLIC_URL], 
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true
}))
const generatePassword= async(password)=>{
    const salt=await bcrypt.genSalt();
    return await bcrypt.hash(password,salt);
}
app.post('/register', async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const name= req.body.name;
    const password=req.body.password;
    const email=req.body.email;
    const phone=req.body.phonenumber;
    try{
    
        if(email && password && name && phone){
            const CredentialsDoc=await Credentials.create({
                email,
                password:await generatePassword(password)
            });
            if(CredentialsDoc){
            const UserDoc=await User.create({
                userId:CredentialsDoc.id,
                email,
                name,
                phone,
            });
            return res.status(200).send({
                Credentials:{
                    id: CredentialsDoc.id,
                    email: CredentialsDoc.email,
                    passowrd:CredentialsDoc.password,
                },
                User:{
                    userId:UserDoc.userId,
                    name:UserDoc.name,
                    phone:UserDoc.phone,
                    email:UserDoc.email
                }
            })
        }
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Server Error")
    }
})
maxAge=24*60*60;
app.post('/login',async(req,res)=>{
    console.log('received');
    jwtSecretKey=process.env.JWT_SECRET
    await mongoose.connect(process.env.MONGO_URL);
    const email= req.body.email;
    const password=req.body.password;
    try{
        if(email && password){
            const CredentialsDoc=await Credentials.findOne({email})
            //console.log("email found")
            console.log(CredentialsDoc)
            if(CredentialsDoc){
                const passwordOK=await bcrypt.compare(password,CredentialsDoc.password);
                if(passwordOK){
                    //console.log("password found")
                    const UserDoc=await User.findOne({email})
                    jwtData={
                        email:CredentialsDoc.email,
                        id:CredentialsDoc.id
                    }
                    const token = jwt.sign(jwtData, jwtSecretKey)
                    setToken=()=>{
                        res.cookie('token',token).json(UserDoc);
                        //console.log(token)
                    };
                    setToken();
                    res.status(200);
                    }
                }
            }
        }
    
    catch{
        console.log(error)
        res.status(400).send("Server Error")
    }
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

