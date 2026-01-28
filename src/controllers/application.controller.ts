import { Request, Response } from "express";
import {
  getApplicationsByRecruiterService,
  updateApplicationStatusService
} from "../services/application.service";

/**
 * Get applications for a recruiter
 */
export const getApplicationsByRecruiter = async (
  req: Request,
  res: Response
) => {
  try {
    const recruiterId = req.params.id as string;

    const applications = await getApplicationsByRecruiterService(recruiterId);

    res.json({ success: true, applications });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch applications"
    });
  }
};

/**
 * Update application status (Accepted / Rejected)
 */
export const updateApplicationStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const applicationId = req.params.id as string;
    const status = req.body.status as string;

    const updated = await updateApplicationStatusService(
      applicationId,
      status
    );

    res.json({ success: true, application: updated });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to update application status"
    });
  }
};
