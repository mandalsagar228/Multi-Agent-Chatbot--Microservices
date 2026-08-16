import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGO_URI;
console.log("url:", URL);

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Agent  DB connected successfully.");
  } catch (error) {
    console.log("Error while connecting to db:", error);
  }
};

export default connectDB;
