import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateToken } from "../utils/token.js";

const normalizeEmail = (email) => (email || "").trim().toLowerCase();

export const register = asyncHandler(async (req, res) => {
  const { name, password, role } = req.body;
  const email = normalizeEmail(req.body.email);
  const exists = await User.findOne({ email });
  if (exists) {
    throw new ApiError(409, "User already exists");
  }
  const user = await User.create({ name, email, password, role });
  const token = generateToken({ id: user._id, role: user.role });
  res.status(201).json(
    new ApiResponse({
      message: "User registered",
      data: { user: { id: user._id, name: user.name, role: user.role }, token },
    })
  );
});

export const login = asyncHandler(async (req, res) => {
  const email = normalizeEmail(req.body.email);
  const { password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }
  if (password !== user.password) {
    throw new ApiError(401, "Invalid credentials");
  }
  const token = generateToken({ id: user._id, role: user.role });
  res.json(
    new ApiResponse({
      message: "Login successful",
      data: { user: { id: user._id, name: user.name, role: user.role }, token },
    })
  );
});





