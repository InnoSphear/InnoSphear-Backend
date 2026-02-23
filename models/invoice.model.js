import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    amount: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    status: {
      type: String,
      enum: ["pending", "paid", "overdue"],
      default: "pending",
    },
    dueDate: { type: Date },
    items: [
      {
        title: String,
        quantity: Number,
        rate: Number,
      },
    ],
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;








