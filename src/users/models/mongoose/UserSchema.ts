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
  },
  { versionKey: "" }
);
const User = mongoose.model("user", UserSchema);
export default User;
