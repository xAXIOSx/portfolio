const express = require('express')
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT,()=>{
    console.log('Server has started');
    
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'axiosdmitry@gmail.com',
        pass: 'dzkflxzjoniuvgie'
    }
});

app.get('/sendEmail',(req:any)=>{
    const mailOptions = {
        from: 'axiosdmitry@gmail.com',
        to: 'axiosdmitry@gmail.com',
        subject: req.query.name,
        text: req.query.text
    }
    transporter.sendMail(mailOptions, function(error:any,info:any){
        if(error){
            console.log(error);
        }else {
            console.log(`Email sent: ${info.response}`);
        }
    })
})


