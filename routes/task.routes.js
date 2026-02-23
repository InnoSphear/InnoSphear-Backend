import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect);
router.route("/").post(authorizeRoles("super_admin", "admin", "project_manager"), createTask).get(getTasks);
router.route("/:id").put(updateTask).delete(deleteTask);

export default router;








