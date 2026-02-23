import User from "../models/user.model.js";
import logger from "../config/logger.js";
import ENV from "../config/env.js";

const seedSuperAdmin = async () => {
  const email = (ENV.DEFAULT_SUPERADMIN_EMAIL || "").trim().toLowerCase();
  const password = ENV.DEFAULT_SUPERADMIN_PASSWORD;

  if (!email || !password) {
    logger.warn("Default super admin env vars are missing.");
    return;
  }

  await User.findOneAndUpdate(
    { email },
    {
      name: "Ujjwal Karmakar",
      email,
      password,
      role: "super_admin",
      isActive: true,
    },
    { upsert: true, new: true }
  );

  logger.info("Default super admin ensured.");
};

export default seedSuperAdmin;





