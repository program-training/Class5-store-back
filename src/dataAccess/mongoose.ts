import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || ""
    );
    return "Connected to MongoDB";
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return "no connection to mongo :((";
  } 
};
