import mongoose from "mongoose";
import User from "../models/userModel.js";
import { users as localUsers } from "../seed/users.js"; // your seed array
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;
const USE_LOCAL_DATA = process.env.USE_LOCAL_DATA === "true";

// Function to connect to MongoDB
async function connectMongo() 
{
    if (!MONGO_URI) throw new Error("MONGO_URI not set!");
    if (mongoose.connection.readyState === 1) return; // Already connected
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
}

// Main function to get users
export async function getUsers() 
{
    if (USE_LOCAL_DATA) {
        console.log("📦 Using local seed users");
        return localUsers;
    }

    try {
        await connectMongo();
        const users = await User.find().lean();

        // Fallback to local if DB is empty
        if (!users || users.length === 0) {
        console.warn("⚠️ MongoDB returned no users");
        console.log("📦 Falling back to local seed users");
        return localUsers;
        }

        console.log("🌍 Fetched users from MongoDB");
        return users;
    } 
    catch (err) {
        console.error("⚠️ Could not fetch from MongoDB, falling back to local seed:", err.message);
        return localUsers;
    }
}