import transporter from '@/util/transporter';
import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const { name, contact, email, subject, message }: Payload = req.body;

      if (!name || !email || !contact || !subject || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const mailOptionsToYou = {
        from: process.env.SMTP_USER,
        to: 'sarmed@impleko.com',
        subject: `New Message from ${name}: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nSubject: ${subject}\nMessage: ${message}`,
        html: `
          <h1>New Message</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      const mailOptionsToUser = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thanks for Reaching Out!',
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
        `,
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
        `,
      };
      console.log(transporter);

      await transporter.sendMail(mailOptionsToYou);
      await transporter.sendMail(mailOptionsToUser);

      res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}