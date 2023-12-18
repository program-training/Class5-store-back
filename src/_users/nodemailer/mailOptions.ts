import { config } from "dotenv";
import { mailOptionsInterface } from "../interfaces/mailOptionsInterface";
config();
const { FASTMAIL_EMAIL: email } = process.env;

export const mailOptions = ({ to }: mailOptionsInterface) => {
  return {
    from: email,
    to,
    subject: "Welcome To Team 1 Store! 🤪",
    text: `Hi ${to}..\n We are 😭 to see you signed up to our store website...\n If you ordered something you can click this link to see it:\n http://localhost:5173/store`,
  };
};
