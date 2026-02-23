import Service from "../models/service.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Service created", data: service }));
});

export const getServices = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.active ? { isActive: req.query.active === "true" } : {};
  const services = await Service.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Service.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: services, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Service updated", data: service }));
});

export const deleteService = asyncHandler(async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Service deleted" }));
});



