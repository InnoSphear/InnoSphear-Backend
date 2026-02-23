import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    industry: { type: String },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    notes: { type: String },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

export default Client;








