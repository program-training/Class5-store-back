import { bool } from "joi";
import mongoose, { Schema, InferSchemaType, Model } from "mongoose";

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      minLength: 5,
    },
    isAdmin: {
      type: Boolean,
      required: false,
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
