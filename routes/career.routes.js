import express from "express";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
  submitApplication,
  getApplications,
  updateApplication,
} from "../controllers/career.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/jobs", getJobs);
router.post("/jobs", protect, authorizeRoles("super_admin", "admin", "hr"), createJob);
router.put("/jobs/:id", protect, authorizeRoles("super_admin", "admin", "hr"), updateJob);
router.delete("/jobs/:id", protect, authorizeRoles("super_admin", "admin", "hr"), deleteJob);

router.post("/applications", submitApplication);
router.get("/applications", protect, authorizeRoles("super_admin", "admin", "hr"), getApplications);
router.put("/applications/:id", protect, authorizeRoles("super_admin", "admin", "hr"), updateApplication);

export default router;








