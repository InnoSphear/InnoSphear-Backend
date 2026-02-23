import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    hero: {
      headline: String,
      subheadline: String,
      ctaLabel: String,
    },
    services: [{ title: String, description: String, highlights: [String] }],
    pricing: [
      {
        name: String,
        price: String,
        cycle: String,
        summary: String,
        features: [String],
      },
    ],
    caseStudies: [
      {
        title: String,
        category: String,
        summary: String,
        metrics: String,
      },
    ],
    testimonials: [
      {
        quote: String,
        name: String,
        title: String,
      },
    ],
    contact: {
      email: String,
      phone: String,
      address: String,
    },
    socials: {
      linkedin: String,
      twitter: String,
      dribbble: String,
    },
    logoUrl: String,
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", settingSchema);

export default Setting;








