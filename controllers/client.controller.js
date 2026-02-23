import Client from "../models/client.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getPagination, buildSort } from "../utils/pagination.js";

export const createClient = asyncHandler(async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(new ApiResponse({ message: "Client created", data: client }));
});

export const getClients = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const search = req.query.search
    ? { name: { $regex: req.query.search, $options: "i" } }
    : {};
  const clients = await Client.find(search)
    .sort(buildSort(req.query))
    .skip(skip)
    .limit(limit);
  const total = await Client.countDocuments(search);
  res.json(
    new ApiResponse({
      data: { items: clients, page, total, pages: Math.ceil(total / limit) },
    })
  );
});

export const getClientById = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(new ApiResponse({ data: client }));
});

export const updateClient = asyncHandler(async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(new ApiResponse({ message: "Client updated", data: client }));
});

export const deleteClient = asyncHandler(async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json(new ApiResponse({ message: "Client deleted" }));
});








