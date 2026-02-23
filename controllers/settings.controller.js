import Setting from "../models/setting.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await Setting.findOne();
  res.json(new ApiResponse({ data: settings }));
});

export const updateSettings = asyncHandler(async (req, res) => {
  const settings = await Setting.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(new ApiResponse({ message: "Settings updated", data: settings }));
});








