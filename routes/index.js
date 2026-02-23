import express from "express";
import authRoutes from "./auth.routes.js";
import clientRoutes from "./client.routes.js";
import projectRoutes from "./project.routes.js";
import taskRoutes from "./task.routes.js";
import leadRoutes from "./lead.routes.js";
import careerRoutes from "./career.routes.js";
import blogRoutes from "./blog.routes.js";
import financeRoutes from "./finance.routes.js";
import teamRoutes from "./team.routes.js";
import settingsRoutes from "./settings.routes.js";
import uploadRoutes from "./upload.routes.js";
import serviceRoutes from "./service.routes.js";
import pricingRoutes from "./pricing.routes.js";
import caseStudyRoutes from "./caseStudy.routes.js";
import dealRoutes from "./deal.routes.js";
import expenseRoutes from "./expense.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/clients", clientRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/leads", leadRoutes);
router.use("/careers", careerRoutes);
router.use("/blogs", blogRoutes);
router.use("/finance", financeRoutes);
router.use("/team", teamRoutes);
router.use("/settings", settingsRoutes);
router.use("/uploads", uploadRoutes);
router.use("/services", serviceRoutes);
router.use("/pricing", pricingRoutes);
router.use("/case-studies", caseStudyRoutes);
router.use("/deals", dealRoutes);
router.use("/expenses", expenseRoutes);

export default router;








