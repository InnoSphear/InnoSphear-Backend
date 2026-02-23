import ApiError from "../utils/ApiError.js";

export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(new ApiError(403, "Access denied"));
  }
  return next();
};








