import atsRoutes from "./routes/ats.routes";
import applicationRoutes from "./routes/application.routes";
import uploadRoutes from "./routes/upload.routes";
import jobRoutes from "./routes/job.routes";
import authRoutes from "./routes/auth.routes";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// ==============================
// ✅ CORS MUST COME FIRST
// ==============================
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // your Live Server URL
    credentials: true,
  })
);

// ==============================
// Middleware
// ==============================
app.use(express.json());
app.use(cookieParser());

// ==============================
// Routes
// ==============================
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/ats", atsRoutes);

// ==============================
// Server + MongoDB
// ==============================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});
