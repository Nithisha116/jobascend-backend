import { Request, Response } from "express";
import {
  createJobService,
  getAllJobsService,
  getJobsByRecruiterService,
  getJobByIdService,
  updateJobService,
  deleteJobService
} from "../services/job.service";

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await createJobService(req.body);
    res.json({ success: true, job });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllJobs = async (_req: Request, res: Response) => {
  try {
    const jobs = await getAllJobsService();
    res.json({ success: true, jobs });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getMyJobs = async (req: Request, res: Response) => {
  try {
    const recruiterId = req.params.id as string;
    const jobs = await getJobsByRecruiterService(recruiterId);
    res.json({ success: true, jobs });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id as string;
    const job = await getJobByIdService(jobId);
    res.json({ success: true, job });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id as string;
    const updatedJob = await updateJobService(jobId, req.body);
    res.json({ success: true, job: updatedJob });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id as string;
    await deleteJobService(jobId);
    res.json({ success: true, message: "Job deleted" });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};
