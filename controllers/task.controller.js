import Task from "../models/task.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Task created", data: task }));
});

export const getTasks = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.status ? { status: req.query.status } : {};
  const tasks = await Task.find(filter)
    .populate("project", "name")
    .populate("assignee", "name email")
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Task.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: tasks, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Task updated", data: task }));
});

export const deleteTask = asyncHandler(async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Task deleted" }));
});








