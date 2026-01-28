"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicationStatus = exports.getApplicationsByRecruiter = void 0;
const application_service_1 = require("../services/application.service");
/**
 * Get applications for a recruiter
 */
const getApplicationsByRecruiter = async (req, res) => {
    try {
        const recruiterId = req.params.id;
        const applications = await (0, application_service_1.getApplicationsByRecruiterService)(recruiterId);
        res.json({ success: true, applications });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to fetch applications"
        });
    }
};
exports.getApplicationsByRecruiter = getApplicationsByRecruiter;
/**
 * Update application status (Accepted / Rejected)
 */
const updateApplicationStatus = async (req, res) => {
    try {
        const applicationId = req.params.id;
        const status = req.body.status;
        const updated = await (0, application_service_1.updateApplicationStatusService)(applicationId, status);
        res.json({ success: true, application: updated });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Failed to update application status"
        });
    }
};
exports.updateApplicationStatus = updateApplicationStatus;
