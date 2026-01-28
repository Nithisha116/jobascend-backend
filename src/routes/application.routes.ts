import { Router } from "express";
import {
  getApplicationsByRecruiter,
  updateApplicationStatus
} from "../controllers/application.controller";

const router = Router();

router.get("/recruiter/:id", getApplicationsByRecruiter);
router.put("/update-status/:id", updateApplicationStatus);

export default router;
