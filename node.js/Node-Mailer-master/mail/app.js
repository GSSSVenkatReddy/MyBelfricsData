var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'venkatreddygudla@gmail.com',
    pass: 'Gsssvr@525'
  }
});

var mailOptions = {
  from: 'venkatreddygudla@gmail.com',
  to: 'venkatreddygudla@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HTML!',
  html: '<p>hello</p>',
  // attachments: [{
  //       filename: 'MailWalletTemplate.html',
  //       path: '/home/venkat/Downloads/MailWalletTemplate.html'
  //   }]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});