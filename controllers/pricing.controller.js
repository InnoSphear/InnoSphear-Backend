import Pricing from "../models/pricing.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createPricing = asyncHandler(async (req, res) => {
  const item = await Pricing.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Pricing created", data: item }));
});

export const getPricing = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.active ? { isActive: req.query.active === "true" } : {};
  const items = await Pricing.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Pricing.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updatePricing = asyncHandler(async (req, res) => {
  const item = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Pricing updated", data: item }));
});

export const deletePricing = asyncHandler(async (req, res) => {
  await Pricing.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Pricing deleted" }));
});


