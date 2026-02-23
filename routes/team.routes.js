import express from "express";
import { getTeam, updateTeamMember } from "../controllers/team.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect);
router.get("/", authorizeRoles("super_admin", "admin"), getTeam);
router.put("/:id", authorizeRoles("super_admin", "admin"), updateTeamMember);

export default router;








