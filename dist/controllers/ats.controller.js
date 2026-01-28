"use strict";
// controllers/ats.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateATSScore = void 0;
const ats_service_1 = require("../services/ats.service");
const calculateATSScore = async (req, res) => {
    try {
        const { resumeText, jobDescription } = req.body;
        if (!resumeText || !jobDescription) {
            return res.status(400).json({
                success: false,
                message: "Resume text and job description are required"
            });
        }
        const result = (0, ats_service_1.calculateATSScoreService)(resumeText, jobDescription);
        res.json({
            success: true,
            atsScore: result.score,
            matchedSkills: result.matchedSkills,
            missingSkills: result.missingSkills
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
exports.calculateATSScore = calculateATSScore;
