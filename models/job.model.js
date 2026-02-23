import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    department: { type: String },
    type: { type: String },
    description: { type: String },
    status: { type: String, enum: ["open", "closed"], default: "open" },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;








