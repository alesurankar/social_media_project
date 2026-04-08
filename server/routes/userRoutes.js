import express from "express";
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  getUserDetails, 
  updateUser 
} from "../controllers/userController.js";
import { isAuthenticatedUser } from "../helpers/auth.js";

const router = express.Router();

// POST /api/objects -> create a new user
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

router.route('/me')
  .get(isAuthenticatedUser, getUserDetails)
  .patch(isAuthenticatedUser, updateUser);

export default router;