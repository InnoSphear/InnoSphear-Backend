import express from "express";
import { createBlog, getBlogs, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, authorizeRoles("super_admin", "admin"), createBlog);
router.put("/:id", protect, authorizeRoles("super_admin", "admin"), updateBlog);
router.delete("/:id", protect, authorizeRoles("super_admin", "admin"), deleteBlog);

export default router;








