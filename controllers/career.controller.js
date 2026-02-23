import Job from "../models/job.model.js";
import Application from "../models/application.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Job created", data: job }));
});

export const getJobs = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.status ? { status: req.query.status } : {};
  const jobs = await Job.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Job.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: jobs, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Job updated", data: job }));
});

export const deleteJob = asyncHandler(async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Job deleted" }));
});

export const submitApplication = asyncHandler(async (req, res) => {
  const application = await Application.create(req.body);
  res
    .status(201)
    .json(new ApiResponse({ message: "Application submitted", data: application }));
});

export const getApplications = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const applications = await Application.find()
    .populate("job", "title")
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Application.countDocuments();
  res.json(
    new ApiResponse({
      data: { items: applications, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateApplication = asyncHandler(async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Application updated", data: application }));
});








