"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadResume = void 0;
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const uploadResume = async (req, res) => {
    try {
        if (!req.file)
            return res.status(400).json({ message: "No file provided" });
        const result = await cloudinary_1.default.uploader.upload(req.file.path, {
            resource_type: "raw",
            folder: "resumes",
        });
        res.json({
            success: true,
            url: result.secure_url,
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.uploadResume = uploadResume;
