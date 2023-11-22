import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb+srv://8a:123456789Aa@cluster0.5yelxyu.mongodb.net/project-11-12-23"
    );
    return "Connected to MongoDB";
  } catch (error) {
    return Promise.reject(error);
  }
};
