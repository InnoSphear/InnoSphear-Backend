import User from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const getTeam = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const users = await User.find()
    .select("-password")
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await User.countDocuments();
  res.json(
    new ApiResponse({
      data: { items: users, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const updateTeamMember = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");
  res.json(new ApiResponse({ message: "Team member updated", data: user }));
});








