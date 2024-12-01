import nodemailer from 'nodemailer';

import 'dotenv/config';
// SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// create email processor  to send email
const emailProcess = async (templateObj) => {
  const info = await transporter.sendMail(templateObj);
  console.log(info.messageId);
};
// setting up email template

export const updateUserTemplate = () => {
  const obj = {
    from: '"Shankar 👻" <corene.grady@ethereal.email>', // sender address
    to: 'corene.grady@ethereal.email', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  };
  emailProcess(obj);
};
