import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadResume = async (req: Request, res: Response) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file provided" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "resumes",
    });

    res.json({
      success: true,
      url: result.secure_url,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
