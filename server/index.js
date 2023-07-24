const express = require('express');
const cors = require('cors');
const fs = require('fs');
const {mongoose, models } = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:[process.env.PUBLIC_URL], 
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,
}))