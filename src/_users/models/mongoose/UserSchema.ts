import mongoose, { Schema, Document } from "mongoose";
import { transporter } from "../../nodemailer/transporter";
import { mailOptions } from "../../nodemailer/mailOptions";
import { mailOptionsInterface } from "../../interfaces/mailOptionsInterface";

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      minLength: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { versionKey: "" }
);
interface UserDocument extends Document {
  email: string;
  isAdmin: boolean;
  password?: string;
}

UserSchema.pre<UserDocument>("save", function () {
  const details: mailOptionsInterface = {
    to: this.email,
  };
  transporter.sendMail(mailOptions(details), function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
const User = mongoose.model("user", UserSchema);
export default User;
