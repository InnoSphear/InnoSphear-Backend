import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/register", protect, authorizeRoles("super_admin", "admin"), register);
router.post("/login", login);

export default router;








