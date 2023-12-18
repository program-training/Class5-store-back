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
    loginCount: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { versionKey: "" }
);

interface UserDocument extends Document {
  _id: any;
  email: string;
  isAdmin: boolean;
  password?: string;
  loginCount: number;
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

UserSchema.pre("findOne", async function () {
  const UserModel = mongoose.model<UserDocument>("User");

  await UserModel.updateOne(
    {
      email: this.getQuery().email,
    },
    {
      $inc: { loginCount: 1 },
    }
  );
});

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
