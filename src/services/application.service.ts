import Application from "../models/application.model";

export const getApplicationsByRecruiterService = async (
  recruiterId: string
) => {
  const apps = await Application.find().populate("userId");

  return apps.filter(
    (app) =>
      String((app.jobId as any)?.recruiterId) === String(recruiterId)
  );
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
