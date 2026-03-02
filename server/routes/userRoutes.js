import express from "express";
import { registerUser, loginUser, logoutUser, getUserDetails } from "../controllers/userController.js";

const router = express.Router();

// POST /api/objects -> create a new user
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/me').get(isAuthenticatedUser, getUserDetails);

export default router;