import express from "express";
import {
  applyForJob,
  getApplicationsByUser,
  getApplicationsByRecruiter,
  updateApplicationStatus
} from "../controllers/application.controller";

const router = express.Router();

router.post("/apply", applyForJob);
router.get("/user/:id", getApplicationsByUser);
router.get("/recruiter/:id", getApplicationsByRecruiter);
router.put("/update-status/:id", updateApplicationStatus);

export default router;
