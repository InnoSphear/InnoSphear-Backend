import express from "express";
import { createLead, getLeads, updateLead, deleteLead } from "../controllers/lead.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", createLead);
router.use(protect);
router.get("/", getLeads);
router.route("/:id").put(updateLead).delete(deleteLead);

export default router;








