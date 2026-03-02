import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Please enter your name"], trim: true },
    email: { type: String, required: [true, "Please enter your email"], unique: true, lowercase: true, trim: true },
    password: { type: String, required: [true, "Please enter your password"], minlength: 8, select: false },
  },
  { timestamps: true }
);

// 🔐 Hash password before save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 🔑 Generate JWT (used by sendToken)
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

export default mongoose.model("User", userSchema);