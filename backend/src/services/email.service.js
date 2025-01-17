import nodemailer from 'nodemailer';


const sendEmail = async() => {
  const transporter = nodemailer.createTransport({
    service: `${process.env.GMAIL_SERVICE}`,
    auth: {
      user: `${process.env.GMAIL_USERNAME}`,
      pass: `${process.env.GMAIL_PASSWORD}`,
    }
  });

  const info = await transporter.sendMail({
    from: '"Clinic Scheduler" <no-reply@clinic.com>', // sender address
    to: `${process.env.RECEIVER_MAIL}`, // receiver's email
    subject: 'Test Email Subject', // Subject line
    text: 'This is a plain text body.', // plain text body
    html: '<a>This is an HTML body with a link.</a>', // HTML body
});
}

export default sendEmail;