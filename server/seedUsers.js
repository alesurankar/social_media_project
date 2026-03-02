import "dotenv/config";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import { users } from "./seed/users.js";

const MONGO_URI = process.env.MONGO_URI;

async function seed() 
{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // Clear existing users
        await User.deleteMany({});
        console.log("🗑️  Cleared existing users");

        // Insert users one by one so passwords get hashed
        for (const userData of users) {
            const user = new User(userData);
            await user.save(); // <-- pre-save hook runs here
            console.log(`🌱 Inserted user: ${user.username}`);
        }

        process.exit(0);
    } 
    catch (err) {
        console.error("❌ Seed failed:", err);
        process.exit(1);
    }
}

seed();