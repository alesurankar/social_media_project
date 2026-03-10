/**
 * Server Entry Point
 * This file starts the Express server, configures external services,
 * and handles global error events
 */

import "dotenv/config";  // load .env
import app from "./app.js";
import { connectDatabase } from "./config/database.js";

// Environment config
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Connect database first
connectDatabase()
  .then(() => {
    console.log(`🚀 Server starting in ${NODE_ENV} mode...`);
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  });

// Handle uncaught errors gracefully
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});