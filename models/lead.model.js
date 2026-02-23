import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
    notes: { type: String },
    source: { type: String },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;








