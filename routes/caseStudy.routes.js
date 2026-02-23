import express from "express";
import {
  createCaseStudy,
  getCaseStudies,
  updateCaseStudy,
  deleteCaseStudy,
} from "../controllers/caseStudy.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getCaseStudies);
router.post("/", protect, authorizeRoles("super_admin", "admin"), createCaseStudy);
router.put("/:id", protect, authorizeRoles("super_admin", "admin"), updateCaseStudy);
router.delete("/:id", protect, authorizeRoles("super_admin", "admin"), deleteCaseStudy);

export default router;


