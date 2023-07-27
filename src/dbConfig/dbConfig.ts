import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  try {
    const dbURI = process.env.MONGO_URL; // Get the MongoDB URI from the environment variable

    if (!dbURI) {
      throw new Error("MONGO_URI not found in the environment variables.");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection failed: ", err);
      throw new Error("MongoDB connection failed");
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
