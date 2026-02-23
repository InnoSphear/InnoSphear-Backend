import express from "express";
import {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
} from "../controllers/deal.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect);
router.get("/", authorizeRoles("super_admin", "admin", "project_manager"), getDeals);
router.post("/", authorizeRoles("super_admin", "admin", "project_manager"), createDeal);
router.put("/:id", authorizeRoles("super_admin", "admin", "project_manager"), updateDeal);
router.delete("/:id", authorizeRoles("super_admin", "admin"), deleteDeal);

export default router;


