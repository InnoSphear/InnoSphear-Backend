import express from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getServices);
router.post("/", protect, authorizeRoles("super_admin", "admin"), createService);
router.put("/:id", protect, authorizeRoles("super_admin", "admin"), updateService);
router.delete("/:id", protect, authorizeRoles("super_admin", "admin"), deleteService);

export default router;



