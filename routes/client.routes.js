import express from "express";
import {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/client.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect);
router.route("/").post(authorizeRoles("super_admin", "admin", "project_manager"), createClient).get(getClients);
router.route("/:id").get(getClientById).put(updateClient).delete(deleteClient);

export default router;








