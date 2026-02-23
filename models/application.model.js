import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeUrl: { type: String },
    coverLetter: { type: String },
    status: {
      type: String,
      enum: ["applied", "shortlist", "rejected", "hired"],
      default: "applied",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;








