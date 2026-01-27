import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  jobId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  status: string;
  createdAt: Date;
}

const applicationSchema = new Schema<IApplication>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    status: {
      type: String,
      enum: ["Applied", "Accepted", "Rejected"],
      default: "Applied"
    }
  },
  { timestamps: true }
);

const Application = mongoose.model<IApplication>("Application", applicationSchema);

export default Application;
