import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    description: { type: String },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending",
    },
    startDate: { type: Date },
    endDate: { type: Date },
    budget: { type: Number },
    teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;








