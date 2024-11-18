require('dotenv').config({path:'./config.env'})

const compression = require('compression');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const environment = process.env.NODE_ENV;
const PORT = process.env.PORT;
const {body, validationResult } = require('express-validator');
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
    
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

//Middleware
app.enable('trust proxy');
app.use(function(request, response, next) {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }
    next();
})
app.use(compression());  
app.use(express.static('public'));
app.use(express.json());
//Sending index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


//Form Handling with express-validator and nodemailer
app.post('/', 
    body('firstName').escape().trim().notEmpty().withMessage('Your first name is required.'),
    body('lastName').escape().trim().notEmpty().withMessage('Your last name is required.'),
    body('contactNumber').trim().notEmpty().isLength({min:11, max:15}).withMessage('Your contact number must be between 11 and 15 digits.'),
    body('email').trim().notEmpty().isEmail().withMessage('A valid email address is required.'),
    body('message').if(body('form').isIn('Contact Form')).trim().exists().notEmpty().withMessage('A message is required.'),
    body('qualifications').if(body('form').isIn('Interest Form')).exists().isIn(["Master's in Counselling or Clinical Psychology", 'Certification or Diploma in Psychotherapy', 'Other...']).withMessage('An option must be selected.'),
    body('otherQualifications').if(body('form').isIn('Interest Form') && body('qualifications').isIn(['Other...'])).escape().trim().notEmpty().withMessage('A qualification must be entered'),
    body('interest').if(body('form').isIn('Interest Form')).exists().isIn(['Visiting the space', 'Renting a Therapy Room', 'Renting the Group Room']).withMessage('An option must be selected.'),
    body('age').if(body('form').isIn('Seek Therapy Form')).exists().isInt({lt:100, gt:17}).withMessage('Your age must be between 18 and 99.'),
    body('gender').if(body('form').isIn('Seek Therapy Form')).exists().isIn(['Male', 'Female', 'Transgender']).withMessage('A valid option must be selected.'),
    body('needs').optional().escape().if(body('form').isIn('Seek Therapy Form')).trim(),
(req, res) => {
    const errors = validationResult(req)
    if (req.body.form === 'Contact Form'){
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else {
            let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: req.body.form,
            html:`
            <p><strong>First Name:</strong> ${req.body.firstName}</p>
            <p><strong>Last Name:</strong> ${req.body.lastName}</p>
            <p><strong>Contact Number:</strong> ${req.body.contactNumber}</p>
            <p><strong>Contact Email:</strong> ${req.body.email}</p>
            <p><strong>Message:</strong> ${req.body.message}</p>
            `}
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.json().send('error');
                } else {
                    console.log('Email Sent.' + info.response );
                    return res.json().send('success');
                }
            });
        }
    } else if (req.body.form === 'Interest Form') {
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array())
        } else {
            console.log(req.body);
            let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: req.body.form,
            html:`
            <p><strong>First Name:</strong> ${req.body.firstName}</p>
            <p><strong>Last Name:</strong> ${req.body.lastName}</p>
            <p><strong>Contact Number:</strong> ${req.body.contactNumber}</p>
            <p><strong>Contact Email:</strong> ${req.body.email}</p>
            <p><strong>Qualifications:</strong> ${req.body.qualifications}</p>
            <p><strong>Other Qualifications:</strong> ${req.body.otherQualifications}</p>
            <p><strong>Interested in:</strong> ${req.body.interest}</p>
            `}
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.json().send('error');
                } else {
                    console.log('Email Sent.' + info.response );
                    res.json().send('success');
                }
            });
        }
    } else { 
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array())
        } else {
            console.log(req.body);
            let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: req.body.form,
            html:`
            <p><strong>First Name:</strong> ${req.body.firstName}</p>
            <p><strong>Last Name:</strong> ${req.body.lastName}</p>
            <p><strong>Contact Number:</strong> ${req.body.contactNumber}</p>
            <p><strong>Contact Email:</strong> ${req.body.email}</p>
            <p><strong>Age:</strong> ${req.body.age}</p> 
            <p><strong>Gender:</strong> ${req.body.gender}</p> 
            <p><strong>Needs:</strong> ${req.body.needs}</p>
            `}
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.json().send('error');
                } else {
                    console.log('Email Sent.' + info.response );
                    return res.json().send('success');
                }
            });
        }
    }
});
        

//Listening Port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})