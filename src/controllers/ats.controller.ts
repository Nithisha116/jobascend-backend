// controllers/ats.controller.ts

import { Request, Response } from "express";
import { calculateATSScoreService } from "../services/ats.service";

export const calculateATSScore = async (req: Request, res: Response) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Resume text and job description are required"
      });
    }

    const result = calculateATSScoreService(resumeText, jobDescription);

    res.json({
      success: true,
      atsScore: result.score,
      matchedSkills: result.matchedSkills,
      missingSkills: result.missingSkills
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
