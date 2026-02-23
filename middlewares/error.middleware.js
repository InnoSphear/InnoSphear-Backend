import logger from "../config/logger.js";

export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found - ${req.originalUrl}`,
  });
};

export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  if (status >= 500) {
    logger.error(err);
  }
  res.status(status).json({
    success: false,
    message: err.message || "Server error",
    errors: err.errors || [],
  });
};








