import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  NODE_ENV: process.env.NODE_ENV || "development",
  DEFAULT_SUPERADMIN_EMAIL: process.env.DEFAULT_SUPERADMIN_EMAIL,
  DEFAULT_SUPERADMIN_PASSWORD: process.env.DEFAULT_SUPERADMIN_PASSWORD,
};

export default ENV;








