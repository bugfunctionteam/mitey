import nodemailer from 'nodemailer';

interface SendEmailOptions {
  from?: string;
  to: string;
  subject?: string;
  text: string;
}

const client = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: process.env.EMAIL_SERVER_USER || "admin@bugfunction.com",
      pass: process.env.EMAIL_SERVER_PASSWORD || "{Willyums11G}",
  }
});

export const sendEmail = (options: SendEmailOptions) => {
  client.sendMail(
    {
        from: options.from || "noreply@bugfunction.com",
        to: options.to,
        subject: options.subject || "Email from Mitey",
        text: "Please contact support once you recieve this message. Code: 48HB83"
    }
  )
}
