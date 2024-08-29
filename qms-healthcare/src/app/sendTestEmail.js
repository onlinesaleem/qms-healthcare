const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const msg = {
  to: 'onlinesaleem@gmail.com', // Change to your recipient
  from: 'info@qmshealthcare.org', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
