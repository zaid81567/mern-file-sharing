import mongoose from "mongoose";
import dotenv from "dotenv";

export const DBConnection = async () => {
  dotenv.config();
  console.log("db pass: " + process.env.MONGODB_PASSWORD);

  const MONGODB_URI = `mongodb+srv://sahilahmed81567:${process.env.MONGODB_PASSWORD}@file-sharing.kivjpc1.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the DB", error.message);
  }
};

mongoose.set("debug", true);
