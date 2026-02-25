import User from "../models/userModel.js";
import asyncErrorHandler from "../middlewares/helpers/asyncErrorHandler.js";

/**
 * Create a new user
 * @route POST /api/users
 */
export const createUser = asyncErrorHandler(async (req, res) => {
  console.log("🔥 createUser triggered");

  const { username, email, passwordHash, bio, avatarUrl } = req.body;

  if (!username || !email || !passwordHash) {
    return res.status(400).json({ message: "Username, email, and password are required" });
  }

  const user = await User.create({ username, email, passwordHash, bio, avatarUrl });

  res.status(201).json({
    success: true,
    user,
    message: "User created successfully",
  });
});

/**
 * Get all users
 * @route GET /api/users
 */
export const getAllUsers = asyncErrorHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    users,
  });
});