import transporter from '@/util/transporter';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

type ResponseData = {
  message: string;
};

type Payload = {
  name: string;
  contact: string;
  email: string;
  subject: string;
  message: string;
};

// Create a Nodemailer transporter
// const transporter:any = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      // Extract the payload from the request body
      const { name, contact, email, subject, message }: Payload = req.body;

      // Validate the payload
      if (!name || !email || !contact || !subject || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Email to you (e.g., tayyabaaly1997@gmail.com)
      const mailOptionsToYou = {
        from: process.env.SMTP_USER, // Sender address
        to: 'sarmed@impleko.com', // Your email address
        subject: `New Message from ${name}: ${subject}`, // Email subject
        text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nSubject: ${subject}\nMessage: ${message}`, // Plain text body
        html: `
          <h1>New Message</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `, // HTML body
      };

      // Email to the user (confirmation email)
      const mailOptionsToUser = {
        from: process.env.SMTP_USER, // Sender address
        to: email, // User's email from the payload
        subject: 'Thanks for Reaching Out!', // Email subject
        text: `
          Hi ${name},
          Thank you for getting in touch! I’ve received your message and will get back to you as soon as possible.
          Here are the details you submitted:
            • Name: ${name}
            • Phone: ${contact}
            • Email: ${email}
            • Subject: ${subject}
            • Message: “${message}”
          If your inquiry is urgent, feel free to reach me directly at:
            📞 Phone: +1-904-243-6176
            📧 Email: sarmed@impleko.com
          Looking forward to connecting with you soon!
          Best,
          Sarmed Rizvi
        `, // Plain text body
        html: `
          <h1>Thanks for Reaching Out!</h1>
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch! I’ve received your message and will get back to you as soon as possible.</p>
          <p>Here are the details you submitted:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Phone:</strong> ${contact}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Subject:</strong> ${subject}</li>
            <li><strong>Message:</strong> “${message}”</li>
          </ul>
          <p>If your inquiry is urgent, feel free to reach me directly at:</p>
          <ul>
            <li>📞 Phone: +1-904-243-6176</li>
            <li>📧 Email: sarmed@impleko.com</li>
          </ul>
          <p>Looking forward to connecting with you soon!</p>
          <p>Best,</p>
          <p>Sarmed Rizvi</p>
        `, // HTML body
      };
      console.log(transporter);
      
      // Send both emails
      await transporter.sendMail(mailOptionsToYou);
      await transporter.sendMail(mailOptionsToUser);

      // Respond with success message
      res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}