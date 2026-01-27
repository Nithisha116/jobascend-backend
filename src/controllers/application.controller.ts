import { Request, Response } from "express";
import {
  applyForJobService,
  getApplicationsByRecruiterService,
  getUserApplicationsService,
  updateApplicationStatusService
} from "../services/application.service";

export const applyForJob = async (req: Request, res: Response) => {
  try {
    const { jobId, userId } = req.body;
    const application = await applyForJobService(jobId, userId);

    res.json({ success: true, application });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getApplicationsByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const applications = await getUserApplicationsService(userId);

    res.json({ success: true, applications });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getApplicationsByRecruiter = async (req: Request, res: Response) => {
  try {
    const recruiterId = req.params.id;
    const applications = await getApplicationsByRecruiterService(recruiterId);

    res.json({ success: true, applications });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateApplicationStatus = async (req: Request, res: Response) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;

    const updated = await updateApplicationStatusService(applicationId, status);

    res.json({ success: true, application: updated });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};
