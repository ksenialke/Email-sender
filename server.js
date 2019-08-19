require('dotenv').config();
const nodemailer = require('nodemailer');

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// STEP 2
// Everything that we need to send to user
let mailOptions = {
    from: 'From Ksenia with 💜 <ksenia.klamut@gmail.com>',
    to: 'justwatchintheplay@gmail.com',
    cc: 'ksenia.klamut@gmail.com',
    subject: 'Sending the email with code LOL',
    //text: 'Is it working?',
    html: '<h1>[Put any generic, pretty HTML here]</h1>' +
        '<img src="http://www.lovethispic.com/uploaded_images/42641-Tree-Christmas-Lights.jpg">'
};

// Step 3
transporter.sendMail(mailOptions, function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log('Email sent, wohooo!');
    }
});