import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect);
router.route("/").post(authorizeRoles("super_admin", "admin", "project_manager"), createProject).get(getProjects);
router.route("/:id").get(getProjectById).put(updateProject).delete(deleteProject);

export default router;








