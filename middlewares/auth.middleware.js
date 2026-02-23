import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import ENV from "../config/env.js";
import User from "../models/user.model.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new ApiError(401, "Not authorized"));
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return next(new ApiError(401, "User not found"));
    }
    req.user = user;
    return next();
  } catch (error) {
    return next(new ApiError(401, "Token invalid"));
  }
};








