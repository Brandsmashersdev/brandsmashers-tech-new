import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST || 'smtp.ethereal.email';
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME || 'tyson.towne@ethereal.email';
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD || 'JzAXtEeykxM8pJpXre';
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER || '';

const transporter = nodemailer.createTransport({
//   service: 'gmail',
  host: 'smtp.ethereal.email',
  port: 587,
  secure: true,
  auth: {
    user:'tyson.towne@ethereal.email',
    pass: 'JzAXtEeykxM8pJpXre',
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, sendTo, subject, text, html } = req.body;

  if (!email || !sendTo || !subject || !text) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: email,
      to: sendTo,
      subject: subject,
      text: text,
      html: html || '',
    });

    console.log('Message Sent:', info.messageId);
    console.log('Mail sent to:', SITE_MAIL_RECIEVER);

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Mail send error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send mail' });
  }
}
