import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.i8qiubt.mongodb.net/?retryWrites=true&w=majority"
  );
  if (connect) return "Connected to MongoDB";
  else return "no connection to mongo :((";
};
