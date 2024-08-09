import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


import { postSignup ,postLogin} from './controllers/user.js';

import { postTransaction,getTransactions } from './controllers/transaction.js';
import { getHealth } from './controllers/health.js';


const app = express();
app.use(express.json());
app.use(cors());

// connect to mongo DB

const connectDB = async () => {

   const conn = await mongoose.connect(process.env.MONGODB_URL)

   if (conn) {
      console.log(`mongo DB connected successfully ✔`)
   }
}
connectDB();

app.get('/health',getHealth )


app.post("/signup", postSignup)

app.post("/login",postLogin )

app.post("/transaction",postTransaction)

app.get("/transactions",getTransactions)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

   console.log(`server is running on ${PORT}`);
})