import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorHandler from "./errorHandler.js";
import asyncErrorHandler from "./asyncErrorHandler.js";


export const isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
  let token;

  // Check cookie first (web)
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // Check Authorization header (mobile)
  else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    console.log("No token found in request");
    return next(new ErrorHandler("Please Login to Access", 401))
  }

  let decodedData;
  try {
    decodedData = jwt.verify(token, process.env.JWT_SECRET);
  } 
  catch (err) {
    console.error("JWT verification failed:", err.message);
    return next(new ErrorHandler("Invalid or expired token", 401));
  }

  req.user = await User.findById(decodedData.id);
  next();
});