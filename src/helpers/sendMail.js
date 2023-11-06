
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_NM_PASS,
    }
   
})

export const sendMail = async (email, username, message) => {

    const mailOptions = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: username,
        text: message,
        html: `<h1>From: ${username}</h1><p>${message}</p><p>Email Adress:${email}</p>`
    }

    try {
       await transporter.sendMail(mailOptions)
    } catch (err) {
        console.log(err)
    }

}

