import Application from "../models/application.model";
import Job from "../models/job.model";

export const applyForJobService = async (jobId: string, userId: string) => {
  const exists = await Application.findOne({ jobId, userId });
  if (exists) throw new Error("You already applied for this job");

  const application = await Application.create({
    jobId,
    userId,
    status: "Applied"
  });

  return application;
};

export const getUserApplicationsService = async (userId: string) => {
  return Application.find({ userId })
    .populate("jobId")
    .populate("userId")
    .sort({ createdAt: -1 });
};

export const getApplicationsByRecruiterService = async (recruiterId: string) => {
  const apps = await Application.find()
    .populate({
      path: "jobId",
      model: "Job"
    })
    .populate("userId");

  // FIX → recruiterId is inside jobId.recruiterId
  return apps.filter(app => String(app.jobId?.recruiterId) === String(recruiterId));
};

export const updateApplicationStatusService = async (
  applicationId: string,
  status: string
) => {
  return Application.findByIdAndUpdate(
    applicationId,
    { status },
    { new: true }
  )
    .populate("jobId")
    .populate("userId");
};
