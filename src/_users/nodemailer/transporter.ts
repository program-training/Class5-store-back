import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
const { FASTMAIL_EMAIL: email, FASTMAIL_PASSWORD: password } = process.env;
export const transporter = nodemailer.createTransport({
  host: "smtp.fastmail.com",
  port: 587, // or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: email,
    pass: password,
  },
});
