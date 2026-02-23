import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import connectDb from "./config/db.js";
import ENV from "./config/env.js";
import apiRoutes from "./routes/index.js";
import seedSuperAdmin from "./utils/seed.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

const app = express();

connectDb().then(() => seedSuperAdmin());

app.use(helmet());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/v1", apiRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});








