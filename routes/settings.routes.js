import express from "express";
import { getSettings, updateSettings } from "../controllers/settings.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getSettings);
router.put("/", protect, authorizeRoles("super_admin", "admin"), updateSettings);

export default router;








