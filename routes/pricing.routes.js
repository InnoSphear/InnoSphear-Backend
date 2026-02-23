import express from "express";
import {
  createPricing,
  getPricing,
  updatePricing,
  deletePricing,
} from "../controllers/pricing.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getPricing);
router.post("/", protect, authorizeRoles("super_admin", "admin"), createPricing);
router.put("/:id", protect, authorizeRoles("super_admin", "admin"), updatePricing);
router.delete("/:id", protect, authorizeRoles("super_admin", "admin"), deletePricing);

export default router;


