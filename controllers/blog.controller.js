import Blog from "../models/blog.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Blog created", data: blog }));
});

export const getBlogs = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = req.query.status ? { status: req.query.status } : {};
  const blogs = await Blog.find(filter)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Blog.countDocuments(filter);
  res.json(
    new ApiResponse({
      data: { items: blogs, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(new ApiResponse({ message: "Blog updated", data: blog }));
});

export const deleteBlog = asyncHandler(async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Blog deleted" }));
});








