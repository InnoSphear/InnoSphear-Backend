import Lead from "../models/lead.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createLead = asyncHandler(async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Lead captured", data: lead }));
});

export const getLeads = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.status ? { status: req.query.status } : {};
  const leads = await Lead.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Lead.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: leads, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Lead updated", data: lead }));
});

export const deleteLead = asyncHandler(async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Lead deleted" }));
});








