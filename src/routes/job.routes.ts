import { updateJob } from "../controllers/job.controller";
import { Router } from "express";
import { 
  createJob, 
  getAllJobs, 
  getMyJobs,
  deleteJob
} from "../controllers/job.controller";

const router = Router();

router.post("/post", createJob);
router.get("/all", getAllJobs);
router.get("/my-jobs/:id", getMyJobs);
router.delete("/delete/:id", deleteJob);   // ← NEW
router.put("/update/:id", updateJob);

export default router;
