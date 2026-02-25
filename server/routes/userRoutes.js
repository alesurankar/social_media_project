import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

// POST /api/objects -> create a new user
router.post("/", createUser);
// GET /api/objects -> get all users
router.get("/", getAllUsers);

export default router;