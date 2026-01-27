import Job, { IJob } from "../models/job.model";

// Create job
export const createJobService = async (jobData: IJob) => {
  return await Job.create(jobData);
};

// Get all jobs
export const getAllJobsService = async () => {
  return await Job.find().sort({ createdAt: -1 });
};

// Get jobs of a specific recruiter
export const getJobsByRecruiterService = async (recruiterId: string) => {
  return await Job.find({ recruiterId }).sort({ createdAt: -1 });
};

// Get single job
export const getJobByIdService = async (id: string) => {
  return await Job.findById(id);
};

// Update job
export const updateJobService = async (
  id: string,
  updateData: Partial<IJob>   // ✅ FIXED (Partial<IJob>)
) => {
  return await Job.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete job
export const deleteJobService = async (id: string) => {
  return await Job.findByIdAndDelete(id);
};
