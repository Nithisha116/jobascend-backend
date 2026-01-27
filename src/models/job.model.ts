import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location?: string;
  experience?: string;
  salary?: string;
  description?: string;
  recruiterId: string;   // ADD THIS
}

const JobSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, default: "" },
    experience: { type: String, default: "" },
    salary: { type: String, default: "" },
    description: { type: String, default: "" },
    recruiterId: { type: String, required: true }, // ADD THIS
  },
  { timestamps: true }
);

export default mongoose.model<IJob>("Job", JobSchema);
