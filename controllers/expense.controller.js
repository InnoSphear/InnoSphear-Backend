import Expense from "../models/expense.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

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

export const updateExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Expense updated", data: expense }));
});

export const deleteExpense = asyncHandler(async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Expense deleted" }));
});


