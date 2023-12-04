import mongoose, { Schema } from "mongoose";

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
const User = mongoose.model("user", UserSchema);
export default User;
