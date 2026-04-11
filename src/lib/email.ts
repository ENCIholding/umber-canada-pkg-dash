import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // umbercanadapkg@gmail.com
    pass: process.env.EMAIL_PASS,   // your 16-char app password
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  return mailer.sendMail({
    from: `"Umber Canada" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
}
