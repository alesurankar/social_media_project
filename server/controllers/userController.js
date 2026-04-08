/**
 * User Controller
 * Handles all user-related operations including authentication, profile management,
 * password reset, and admin user management for the PetShop application
 */

import User from "../models/userModel.js";
import asyncErrorHandler from "../helpers/asyncErrorHandler.js";
import sendToken from "../helpers/sendToken.js";


/**
 * Register New User
 * @route POST /api/v1/users/register
 * @access Public
 */
export const registerUser = asyncErrorHandler(async (req, res, next) => {
  console.log("🔥 Server/userController: registerUser triggered");
  const { username, password, gender } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already taken" });
  }

  const user = await User.create ({
    username,
    password,
    gender,
  });
  sendToken(user, 201, res);
});


/**
 * User Login
 * @route POST /api/v1/users/login
 * @access Public
 */
export const loginUser = asyncErrorHandler(async (req, res, next) => {
  console.log("🔥 Server/userController: loginUser triggered");
  const { username, password } = req.body;
  
  const user = await User.findOne({ username }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  sendToken(user, 200, res);
});


/**
 * User Logout
 * Clears the authentication token cookie
 * @route POST /api/v1/users/logout
 * @access Private
 */
export const logoutUser = asyncErrorHandler(async (req, res, next) => {
  console.log("🔥 Server/userController: logoutUser triggered");
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


// Get User Details
export const getUserDetails = asyncErrorHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

// /**
//  * Forgot Password
//  * Generates password reset token and sends reset email to user
//  * @route POST /api/v1/password/forgot
//  * @access Public
//  */
// export const forgotPassword = asyncErrorHandler(async (req, res, next) => {
//     // Find user by email
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) {
//         return next(new ErrorHandler("User Not Found", 404));
//     }

//     // Generate password reset token
//     const resetToken = await user.getResetPasswordToken();

//     // Save user with reset token (skip validation)
//     await user.save({ validateBeforeSave: false });

//     // Create password reset URL (force HTTPS in production)
//     const resetPasswordUrl = `https://${req.get("host")}/password/reset/${resetToken}`;

//     try {
//         // Send password reset email using SendGrid template
//         await sendEmail({
//             email: user.email,
//             templateId: process.env.SENDGRID_RESET_TEMPLATEID,
//             data: {
//                 reset_url: resetPasswordUrl
//             }
//         });

//         res.status(200).json({
//             success: true,
//             message: `Email sent to ${user.email} successfully`,
//         });

//     } catch (error) {
//         // Clean up reset token if email sending fails
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;

//         await user.save({ validateBeforeSave: false });
//         return next(new ErrorHandler(error.message, 500))
//     }
// });

// // Reset Password
// export const resetPassword = asyncErrorHandler(async (req, res, next) => {

//     // create hash token
//     const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

//     const user = await User.findOne({
//         resetPasswordToken,
//         resetPasswordExpire: { $gt: Date.now() }
//     });

//     if (!user) {
//         return next(new ErrorHandler("Invalid reset password token", 404));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();
//     sendToken(user, 200, res);
// });

// // Update Password
// export const updatePassword = asyncErrorHandler(async (req, res, next) => {

//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

//     if (!isPasswordMatched) {
//         return next(new ErrorHandler("Old Password is Invalid", 400));
//     }

//     user.password = req.body.newPassword;
//     await user.save();
//     sendToken(user, 201, res);
// });

// // Update User Profile
// export const updateProfile = asyncErrorHandler(async (req, res, next) => {

//     const newUserData = {
//         name: req.body.name,
//         email: req.body.email,
//     }

//     if (req.body.avatar !== "") {
//         const user = await User.findById(req.user.id);

//         const imageId = user.avatar.public_id;

//         await cloudinary.v2.uploader.destroy(imageId);

//         const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
//             folder: "avatars",
//             width: 150,
//             crop: "scale",
//         });

//         newUserData.avatar = {
//             public_id: myCloud.public_id,
//             url: myCloud.secure_url,
//         }
//     }

//     await User.findByIdAndUpdate(req.user.id, newUserData, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     });

//     res.status(200).json({
//         success: true,
//     });
// });

// // ADMIN DASHBOARD

// // Get All Users --ADMIN
// export const .getAllUsers = asyncErrorHandler(async (req, res, next) => {

//      if (req.user.role !== "admin") {
//          return next(new ErrorHandler("Forbidden", 403));
//      } 

//     const users = await User.find();

//     res.status(200).json({
//         success: true,
//         users,
//     });
// });

// // Get Single User Details --ADMIN
// export const getSingleUser = asyncErrorHandler(async (req, res, next) => {

//     const user = await User.findById(req.params.id);

//     if (!user) {
//         return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
//     }

//     res.status(200).json({
//         success: true,
//         user,
//     });
// });

// // Update User Role --ADMIN
// export const updateUserRole = asyncErrorHandler(async (req, res, next) => {

//     const newUserData = {
//         name: req.body.name,
//         email: req.body.email,
//         gender: req.body.gender,
//         role: req.body.role,
//     }

//     await User.findByIdAndUpdate(req.params.id, newUserData, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//     });

//     res.status(200).json({
//         success: true,
//     });
// });

// // Delete Role --ADMIN
// export const deleteUser = asyncErrorHandler(async (req, res, next) => {

//     const user = await User.findById(req.params.id);

//     if (!user) {
//         return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
//     }

//     await user.remove();

//     res.status(200).json({
//         success: true
//     });
// });