import nodemailer from "nodemailer";

export type EmailAttachment = {
  filename: string;
  path: string;
};

export async function sendEmail(to: string, subject: string, text: string, attachments: EmailAttachment[] = []) {
  const hasSmtpConfig =
    Boolean(process.env.SMTP_HOST) &&
    Boolean(process.env.SMTP_PORT) &&
    Boolean(process.env.SMTP_USER) &&
    Boolean(process.env.SMTP_PASS) &&
    Boolean(process.env.SMTP_FROM);

  if (!hasSmtpConfig) {
    console.log("[email:fallback]", { to, subject, text, attachments });
    return {
      success: true,
      mode: "log-only"
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
    attachments
  });

  return { success: true, mode: "smtp" };
}
