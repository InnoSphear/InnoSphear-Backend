import Deal from "../models/deal.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createDeal = asyncHandler(async (req, res) => {
  const item = await Deal.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Deal created", data: item }));
});

export const getDeals = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.stage ? { stage: req.query.stage } : {};
  const items = await Deal.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Deal.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateDeal = asyncHandler(async (req, res) => {
  const item = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Deal updated", data: item }));
});

export const deleteDeal = asyncHandler(async (req, res) => {
  await Deal.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Deal deleted" }));
});


