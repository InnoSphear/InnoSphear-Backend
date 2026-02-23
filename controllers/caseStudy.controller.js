import CaseStudy from "../models/caseStudy.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createCaseStudy = asyncHandler(async (req, res) => {
  const item = await CaseStudy.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Case study created", data: item }));
});

export const getCaseStudies = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.active ? { isActive: req.query.active === "true" } : {};
  const items = await CaseStudy.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await CaseStudy.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateCaseStudy = asyncHandler(async (req, res) => {
  const item = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Case study updated", data: item }));
});

export const deleteCaseStudy = asyncHandler(async (req, res) => {
  await CaseStudy.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Case study deleted" }));
});


