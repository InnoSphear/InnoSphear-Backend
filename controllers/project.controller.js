import Project from "../models/project.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Project created", data: project }));
});

export const getProjects = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.status ? { status: req.query.status } : {};
  const projects = await Project.find(filter)
    .populate("client", "name company")
    .populate("teamMembers", "name email")
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Project.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: projects, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate("client", "name")
    .populate("teamMembers", "name email");
  res.json(new ApiResponse({ data: project }));
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Project updated", data: project }));
});

export const deleteProject = asyncHandler(async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Project deleted" }));
});








