import dotenv from "dotenv";
import { createTransport } from "nodemailer";
import { google } from "googleapis";

const { OAuth2 } = google.auth;
dotenv.config();

const oAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const transporter = createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});

const sendEmail = async (email: string, userId: string) => {
    try {
      const info = await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: email,
        subject: `hello to see your order details click on the link` ,
        text: `http://localhost:5173/order-detalis/${userId}`,
      })}
     catch (error) {
        return Promise.reject(error)
      }
  };

export default sendEmail