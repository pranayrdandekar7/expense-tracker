import User from '../models/User.js'
import Email from "./../models/SendMail.js"
import nodemailer from "nodemailer"
import { textTemplate } from '../config.js';


const postSignup = async (req, res) => {
   const { fullname, email, password, dob } = req.body;

   const user = new User({
      fullname: fullname,
      email: email,
      password: password,
      dob: new Date(dob)
   });

   try {
      const savedUser = await user.save();

      const html = textTemplate.replace("####user###", savedUser.fullname)
      const subject = "Welcome to Expense Tracker"

      const transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
            user: process.env.SEND_EMAIL_ID,
            pass: process.env.SEND_EMAIL_PASS
         }
      });

      const mailresponse = await transporter.sendMail({
         from: `"Expense Tracker " <${process.env.SEND_EMAIL_ID}>`,
         to: email,
         subject: subject,
         html: html
      })

      const emailData = new Email({
         to: email,
         subject: subject,
         html: html,
         status: "sent",
         user: savedUser._id
      })

      await emailData.save();


      res.json({
         success: true,
         message: `Signup successful`,
         data: savedUser
      })

   }
   catch (e) {
      res.json({
         success: false,
         message: e.message,
         data: null

      })
   }
}


const postLogin = async (req, res) => {

   const { email, password } = req.body


   const user = await User.findOne({

      email: email,
      password: password
   });

   if (user) {
      res.json({
         success: true,
         message: `user login successfully`,
         data: user
      })
   }
   else {
      res.json({
         success: false,
         message: `invalid credintial`,
         data: null
      })
   }
}

export {
   postSignup,
   postLogin
}