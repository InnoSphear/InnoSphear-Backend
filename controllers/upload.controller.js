import path from "path";
import fs from "fs";
import sharp from "sharp";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  const uploadDir = path.resolve("uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  const filename = `img-${Date.now()}.webp`;
  const filepath = path.join(uploadDir, filename);

  await sharp(req.file.buffer)
    .resize(1600)
    .webp({ quality: 80 })
    .toFile(filepath);

  res.json(
    new ApiResponse({
      message: "Image uploaded",
      data: { url: `/uploads/${filename}` },
    })
  );
});








