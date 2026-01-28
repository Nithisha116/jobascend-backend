"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.getMyJobs = exports.getAllJobs = exports.createJob = void 0;
const job_service_1 = require("../services/job.service");
const createJob = async (req, res) => {
    try {
        const job = await (0, job_service_1.createJobService)(req.body);
        res.json({ success: true, job });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.createJob = createJob;
const getAllJobs = async (_req, res) => {
    try {
        const jobs = await (0, job_service_1.getAllJobsService)();
        res.json({ success: true, jobs });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAllJobs = getAllJobs;
const getMyJobs = async (req, res) => {
    try {
        const recruiterId = req.params.id;
        const jobs = await (0, job_service_1.getJobsByRecruiterService)(recruiterId);
        res.json({ success: true, jobs });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getMyJobs = getMyJobs;
const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await (0, job_service_1.getJobByIdService)(jobId);
        res.json({ success: true, job });
    }
    catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getJobById = getJobById;
const updateJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const updatedJob = await (0, job_service_1.updateJobService)(jobId, req.body);
        res.json({ success: true, job: updatedJob });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.updateJob = updateJob;
const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        await (0, job_service_1.deleteJobService)(jobId);
        res.json({ success: true, message: "Job deleted" });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.deleteJob = deleteJob;
