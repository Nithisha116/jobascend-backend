import { Request, Response } from "express";
import {
  createJobService,
  getAllJobsService,
  getJobsByRecruiterService,
  getJobByIdService,
  updateJobService,
  deleteJobService,
} from "../services/job.service";

// ===================== CREATE JOB =====================
export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, company, recruiterId } = req.body;

    if (!title || !company || !recruiterId) {
      return res.status(400).json({
        success: false,
        message: "Title, company and recruiter ID are required",
      });
    }

    const job = await createJobService(req.body);

    res.status(201).json({ success: true, job });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};


// ===================== GET ALL JOBS =====================
export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobsService();
    res.json({ success: true, jobs });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ===================== GET RECRUITER'S JOBS =====================
export const getMyJobs = async (req: Request, res: Response) => {
  try {
    const recruiterId = req.params.id;
    const jobs = await getJobsByRecruiterService(recruiterId);

    res.json({ success: true, jobs });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ===================== GET SINGLE JOB =====================
export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await getJobByIdService(req.params.id);
    if (!job)
      return res.status(404).json({ success: false, message: "Job not found" });

    res.json({ success: true, job });
  } catch (err: any) {
    res.status(404).json({ success: false, message: "Job not found" });
  }
};

// ===================== UPDATE JOB =====================
export const updateJob = async (req: Request, res: Response) => {
  try {
    const updatedJob = await updateJobService(req.params.id, req.body);

    res.json({ success: true, job: updatedJob });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// ===================== DELETE JOB =====================
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;

    const deleted = await deleteJobService(jobId);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
