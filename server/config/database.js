import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const USE_LOCAL_DATA = process.env.USE_LOCAL_DATA === "true";

if (!MONGO_URI && !USE_LOCAL_DATA) {
  throw new Error("MONGO_URI is not defined in .env");
}

export async function connectDatabase() 
{
  if (USE_LOCAL_DATA) {
    console.log("📦 USE_LOCAL_DATA=true → skipping MongoDB connection");
    return null;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("✅ Mongoose connected");
    return conn;
  } 
  catch (err) {
    console.error("❌ Mongoose connection error:", err);
    throw err;
  }
}