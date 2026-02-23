import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date },
    comments: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    }],
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;








