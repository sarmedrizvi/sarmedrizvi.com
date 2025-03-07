import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';


const smtpConfig: SMTPTransport.Options = {
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  
};

// console.log(SMTP_HOST, SMTP_PORT,SMTP_USER,SMTP_PASS);

const transporter = nodemailer.createTransport(smtpConfig);

export default transporter;