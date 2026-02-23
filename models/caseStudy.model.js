import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    summary: { type: String },
    metrics: { type: String },
    coverImage: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const CaseStudy = mongoose.model("CaseStudy", caseStudySchema);

export default CaseStudy;


