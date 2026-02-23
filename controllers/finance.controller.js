import Invoice from "../models/invoice.model.js";
import Expense from "../models/expense.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Invoice created", data: invoice }));
});

export const getInvoices = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const invoices = await Invoice.find()
    .populate("client", "name")
    .populate("project", "name")
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Invoice.countDocuments();
  res.json(
    new ApiResponse({
      data: { items: invoices, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Invoice updated", data: invoice }));
});

export const createExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Expense created", data: expense }));
});

export const getExpenses = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const expenses = await Expense.find()
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Expense.countDocuments();
  res.json(
    new ApiResponse({
      data: { items: expenses, page, total, pages: Math.ceil(total / limit) },
    })
  );
});








