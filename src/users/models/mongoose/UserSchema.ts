import { bool } from "joi";
import mongoose, { Schema, InferSchemaType, Model } from "mongoose";
export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
  },

  isAdmin: {
    type: Boolean,
    required: false,
  },
});
export const User = mongoose.model("user", UserSchema);
