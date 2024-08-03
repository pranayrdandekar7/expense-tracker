import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
 dotenv.config();

 const app = express();
 app.use(express.json());
 app.use (cors());

 // connect to mongo DB

 const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn){
        console.log(`mongo DB connected successfully ✔`)
    }
 }
 connectDB();

 app.get('/health' ,(req,res)=>{
    res.json({
        
        message :`Welcome to expense tracker API`

    })
 })



 const PORT = process.env.PORT || 5000 ; 

 app.listen (PORT ,()=>{

    console.log (`server is running on ${PORT}`) ;
 })