import express from "express";
import {
  createInvoice,
  getInvoices,
  updateInvoice,
} from "../controllers/finance.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(protect, authorizeRoles("super_admin", "admin"));
router.post("/invoices", createInvoice);
router.get("/invoices", getInvoices);
router.put("/invoices/:id", updateInvoice);

export default router;


