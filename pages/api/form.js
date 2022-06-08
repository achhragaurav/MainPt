// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var nodemailer = require('nodemailer');

export default function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lovemealin10@gmail.com',
    pass: 'qwerty@#12'
  }
});

var mailOptions = {
  from: `${req.body.email}`,
  to: 'lovemealin10@gmail.com',
  subject: 'Email from Website',
  text: `Username is ${req.body.name}
        Email: ${req.body.email}
        Services: ${req.body.services}
        Organisation: ${req.body.organisation}
        Message: ${req.body.message}
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  return res.status(200).json({ ...req.body })
  }
  res.status(200).json({ name: 'John Doe' })
}
