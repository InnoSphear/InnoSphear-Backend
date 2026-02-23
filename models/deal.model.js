import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    value: { type: Number, default: 0 },
    stage: {
      type: String,
      enum: ["lead", "qualified", "proposal", "negotiation", "won", "lost"],
      default: "lead",
    },
    expectedClose: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;


