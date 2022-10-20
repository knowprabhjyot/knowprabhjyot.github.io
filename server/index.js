const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML
const nodemailer = require('nodemailer');//importing node mailer
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('API NOT FOUND')
})

app.post('/contact',(req,res,next)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL,//replace with your email
        pass: process.env.PASSWORD//replace with your password
        }
        });
    
    const mailOptions = {
        from: process.env.EMAIL2,//replace with your email
        to: process.env.EMAIL,//replace with your email
        subject: `Contact name: ${req.body.firstName} ${req.body.lastName}`,
        html: `<h1>Contact details</h1>
            <h2> Name: ${req.body.firstName} ${req.body.lastName} </h2><br>
            <h2> Email: ${req.body.email} </h2><br>
            <h2> Phonenumber: ${req.body.contact} </h2><br>
            <h2> Message:${req.body.query} </h2><br>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send('error') // if error occurs send error as response to client
        }
        else {
            console.log('Email sent: ' + info.response);
            res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
        }
    });
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`)
})