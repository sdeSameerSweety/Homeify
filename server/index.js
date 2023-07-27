const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { mongoose, models } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Credentials = require("./Schema/Credentials");
const User = require("./Schema/User");
const bcrypt = require("bcryptjs");
const { error } = require("console");
const ProductModel = require("./Schema/Products");
const port = process.env.port;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [process.env.PUBLIC_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
const jwtSecretKey = process.env.JWT_SECRET;
const generatePassword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};
app.post("/register", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phonenumber;
  try {
    if (email && password && name && phone) {
      const CredentialsDoc = await Credentials.create({
        email,
        password: await generatePassword(password),
      });
      if (CredentialsDoc) {
        const UserDoc = await User.create({
          userId: CredentialsDoc.id,
          email,
          name,
          phone,
        });
        return res.status(200).send({
          Credentials: {
            id: CredentialsDoc.id,
            email: CredentialsDoc.email,
            passowrd: CredentialsDoc.password,
          },
          User: {
            userId: UserDoc.userId,
            name: UserDoc.name,
            phone: UserDoc.phone,
            email: UserDoc.email,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});
maxAge = 24 * 60 * 60;
app.post("/login", async (req, res) => {
  console.log("received");
  await mongoose.connect(process.env.MONGO_URL);
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (email && password) {
      const CredentialsDoc = await Credentials.findOne({ email });
      console.log(`email found - ${email}`);
      if (CredentialsDoc) {
        const passwordOK = await bcrypt.compare(
          password,
          CredentialsDoc.password
        );
        if (passwordOK) {
          const UserDoc = await User.findOne({ email });
          console.log(UserDoc);
          jwtData = {
            email: CredentialsDoc.email,
            id: UserDoc.userId,
          };
          const token = jwt.sign(jwtData, jwtSecretKey);
          setToken = () => {
            res.cookie("token", token).json(UserDoc);
            //console.log(token)
          };
          setToken();
          res.status(200);
        }
      }
    }
  } catch {
    console.log(error);
    res.status(400).send("Server Error");
  }
});

app.get("/checkuser", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    tokenData = jwt.verify(token, jwtSecretKey);
    //console.log(tokenData.email)
    const tokenEmail = tokenData.email;
    //console.log(tokenEmail)
    const UserData = await User.findOne({ email: tokenEmail });
    res.status(200).json(UserData);
  } else {
    res.json(null);
  }
});

app.post("/address", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const AddressName = req.body.name;
  const addressLine1 = req.body.address1;
  const addressLine2 = req.body.address2;
  const phone = req.body.phone;
  const city = req.body.city;
  const state = req.body.state;
  const pincode = req.body.pincode;
  const email=req.body.email;
  try{
        console.log("Inside try")
        const UserData = await User.findOneAndUpdate(
          {email},
          {
            $push: {address:[{
              addressName: AddressName,
              addressLine1: addressLine1,
              addressLine2: addressLine2,
              phone: phone,
              city: city,
              state: state,
              pincode: pincode,
            }]}
          }
        );
        return res.status(200).send({
            UserData:UserData
        });
      
      
  }
  catch(error){
    res.status(500).send("Internal server error")
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post('/cardForm',async(req,res)=>{
  await mongoose.connect(process.env.MONGO_URL);
  const nameOnCard=req.body.nameOnCard;
  const numberOnCard=req.body.numberOnCard;
  const expiryMonthOnCard=req.body.expiryMonthOnCard;
  const expiryYearOnCard=req.body.expiryYearOnCard;
  const cvvOnCard=req.body.cvvOnCard;
  const email=req.body.email;
  try{
    console.log("Inside try")
    const UserData = await User.findOneAndUpdate(
        {email},
        {
          $push: {paymentInfo:[{
            nameOnCard:nameOnCard,
            cardNumber:numberOnCard,
            expiryMonth:expiryMonthOnCard,
            expiryYear:expiryYearOnCard,
            cvv:cvvOnCard,
          }]}
        }
      );
      return res.status(200).send({
        UserData:UserData
    });
  }
  catch{
    res.status(500).send("Internal Server Error")
  }
})

app.post("/productsFill", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const data = req.body;
  try {
    const catNameDoc = await ProductModel.findOne({
      categoryName: data.categoryName,
    });
    if (catNameDoc) {
      const catItemDoc = await ProductModel.findOne({
        "categoryItem.itemName": data.itemName,
      });
      if (catItemDoc) {
        const productNameDoc = await ProductModel.findOne({
          "categoryItem.itemProducts.name": data.pname,
        });

        if (productNameDoc) {
          console.log("Product already exist");
        } else {
          try {
            const finProduct = await ProductModel.updateOne(
              { "categoryItem.itemName": data.itemName },
              {
                $push: {
                  "categoryItem.$.itemProducts": {
                    name: data.pname,
                    price: data.pprice,
                    description: data.pdesc,
                    imageURL: data.pimg,
                  },
                },
              }
            );
            console.log("New Products Posted");
          } catch (err) {
            console.log(err);
            return res.status(400).send("Server Error");
          }
        }
      } else {
        try {
          const ItemDoc = await ProductModel.updateOne(
            { categoryName: catNameDoc.categoryName },
            {
              $push: {
                categoryItem: {
                  itemName: data.itemName,
                  itemProducts: [
                    {
                      name: data.pname,
                      price: data.pprice,
                      description: data.pdesc,
                      imageURL: data.pimg,
                    },
                  ],
                },
              },
            }
          );
          console.log("new category Item Posted");
        } catch (err) {
          console.log(err);
          return res.status(400).send("Server error");
        }
        console.log("inside else");
      }
    } else {
      try {
        const ProductDoc = await ProductModel.create({
          categoryName: data.categoryName,
          categoryItem: [
            {
              itemName: data.itemName,
              itemProducts: [
                {
                  name: data.pname,
                  price: data.pprice,
                  description: data.pdesc,
                  imageURL: data.pimg,
                },
              ],
            },
          ],
        });
        console.log("New Category Posted");
        return res.status(200).send("Successfully Posted");
      } catch (err) {
        console.log(err);
        return res.status(400).send("Server Error");
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});


app.post("/specificproduct",async(req,res)=>{
  await mongoose.connect(process.env.MONGO_URL);
  const id=req.body.id;
  console.log(id)
  if(id){
    try{
      console.log("inside try")
      const sofa="sofas"
      const product=await ProductModel.aggregate([
        {
          // first, filter the documents, that contain
          // fields with necessary values
          $match: {
            'categoryItem.itemProducts._id': new mongoose.Types.ObjectId(id),
          },
        },
        // the following $unwind stages will convert your arrays
        // to objects, so it would be easier to filter the messages
        {
          $unwind: '$categoryItem',
        },
        {
          $unwind: '$categoryItem.itemProducts'
        },
        {
          // filter messages here
          $match: {
            'categoryItem.itemProducts._id': new mongoose.Types.ObjectId(id),
          },
        },
        {
          // returns only message(s)
          $replaceWith: '$categoryItem.itemProducts',
        },
      ]);
      console.log(product);
      res.status(200).send(product);
    }
    catch(error){
      res.status(500).send("Internal server error")
      console.log(error)
    }
  }
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
