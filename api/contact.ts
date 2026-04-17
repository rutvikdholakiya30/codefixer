import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_PORT === '465', // true for 465, false for others
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || 'sumitcode1207@gmail.com',
      replyTo: email,
      subject: `New Inquiry: ${subject || 'No Subject'}`,
      html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">New Inquiry: CodeFixer</h2>
            <hr/>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
              <strong>Message:</strong><br/>
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
