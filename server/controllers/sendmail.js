import Email from "./../models/SendMail.js"
import nodemailer from "nodemailer"
import User from "./../models/User.js"
import { textTemplate } from "./../config.js"



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "pranaydandekar6@gmail.com",
        pass: "ktti bgjo jsad fxly"
    }
});

const postSendMail = async (req, res) => {

    const { token } = req.headers;

    console.log("menahija")
   
    if (token !== process.env.TOKEN) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    const { userId } = req.params; 
    const user = await User.findById(userId);
    console.log(user)
    
    if (!user) {
        return res.status(404).json({
             message: "User not found." 
            });
    }
    try {

        const to = user.email; 
        const subject = "Welcome to Expense Tracker"
        const html = textTemplate.replace("####user###", user.fullname);

       const mailresponse = await transporter.sendMail({
            from: `"Expense Tracker " <${process.env.SEND_EMAIL_ID}>`,
            to,
            subject,
            html
        })

        const emailEntry = new Email({
            to,
            subject,
            html,
            status: 'sent',
            user: userId
        });

        await emailEntry.save();
        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            data: mailresponse

        })

    }
    catch (err) {

        console.log("error msg: ",err)

        const emailEntry = new Email({
            to,
            subject,
            html,
            status: 'failed',
        });

        await emailEntry.save();
        res.status(500).json({
            success: false,
            message: "email not sent",
            data: mailresponse

        })
       
    }

}

export { postSendMail };