/**
 * Main Express Application Configuration
 * This file sets up the core Express server with middleware, routes, and deployment settings
 */

import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors({ 
  origin: "http://localhost:3000", 
  credentials: true 
}));
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

export default app;