"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicationStatusService = exports.getApplicationsByRecruiterService = void 0;
const application_model_1 = __importDefault(require("../models/application.model"));
const getApplicationsByRecruiterService = async (recruiterId) => {
    const apps = await application_model_1.default.find().populate("userId");
    return apps.filter((app) => String(app.jobId?.recruiterId) === String(recruiterId));
};
exports.getApplicationsByRecruiterService = getApplicationsByRecruiterService;
const updateApplicationStatusService = async (applicationId, status) => {
    return application_model_1.default.findByIdAndUpdate(applicationId, { status }, { new: true })
        .populate("jobId")
        .populate("userId");
};
exports.updateApplicationStatusService = updateApplicationStatusService;
