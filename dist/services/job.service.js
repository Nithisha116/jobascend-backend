"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJobService = exports.updateJobService = exports.getJobByIdService = exports.getJobsByRecruiterService = exports.getAllJobsService = exports.createJobService = void 0;
const job_model_1 = __importDefault(require("../models/job.model"));
// Create job
const createJobService = async (jobData) => {
    return await job_model_1.default.create(jobData);
};
exports.createJobService = createJobService;
// Get all jobs
const getAllJobsService = async () => {
    return await job_model_1.default.find().sort({ createdAt: -1 });
};
exports.getAllJobsService = getAllJobsService;
// Get jobs of a specific recruiter
const getJobsByRecruiterService = async (recruiterId) => {
    return await job_model_1.default.find({ recruiterId }).sort({ createdAt: -1 });
};
exports.getJobsByRecruiterService = getJobsByRecruiterService;
// Get single job
const getJobByIdService = async (id) => {
    return await job_model_1.default.findById(id);
};
exports.getJobByIdService = getJobByIdService;
// Update job
const updateJobService = async (id, updateData // ✅ FIXED (Partial<IJob>)
) => {
    return await job_model_1.default.findByIdAndUpdate(id, updateData, { new: true });
};
exports.updateJobService = updateJobService;
// Delete job
const deleteJobService = async (id) => {
    return await job_model_1.default.findByIdAndDelete(id);
};
exports.deleteJobService = deleteJobService;
