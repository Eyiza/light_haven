const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  port: 587,
  secure: false,
  auth: {
    user: 'lightvirtualhaven@gmail.com', 
    pass: 'xejt jyry xtbw tocb'    
  }
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { FirstName, LastName, Email, Subject, Message } = req.body;

  const mailOptions = {
    from: Email,
    to: 'lightvirtualhaven@gmail.com', // Your email address
    subject: Subject,
    // text: `First Name: ${FirstName}\nLast Name: ${LastName}\nEmail: ${Email}\nMessage: ${Message}`
    html: `
    <h1>Light Haven Contact Form Submission</h1>
    <p><strong>First Name:</strong> ${FirstName}</p>
    <p><strong>Last Name:</strong> ${LastName}</p>
    <p><strong>Email:</strong> ${Email}</p>
    <p><strong>Message:</strong></p>
    <p>${Message}</p>
  `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error: ' + error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
