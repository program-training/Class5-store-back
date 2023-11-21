import mongoose, { Schema, InferSchemaType, Model } from "mongoose";
export const UserSchema = new Schema(
  {
    isAdmin: {
      type: Boolean,
      required: false,
    },
    email: {
      type: String,
      required: true,
      minLength: 5,
    },
    password: {
      type: String,
      required: true,
      minLength: 7,
    },
  },
  { versionKey: "" }
);
const User = mongoose.model("user", UserSchema);
export default User;
