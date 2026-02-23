import express from "express";
import { upload } from "../config/multer.js";
import { uploadImage } from "../controllers/upload.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post(
  "/image",
  protect,
  authorizeRoles("super_admin", "admin"),
  upload.single("image"),
  uploadImage
);

export default router;








