import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    cycle: { type: String },
    summary: { type: String },
    features: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Pricing = mongoose.model("Pricing", pricingSchema);

export default Pricing;


