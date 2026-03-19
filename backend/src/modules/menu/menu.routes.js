// routes/menu.routes.js
import express from "express";
import {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
} from "./menu.controller.js";
import { protect } from "../../middlewares/authMiddleware.js";


import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), protect, createMenu);
router.get("/" , getMenus); //http://localhost:6000/api/menus?page=1&limit=10&category=piza&search=fizaaaa
router.get("/:id", getMenuById);
router.put("/:id", upload.single("image"), updateMenu);
router.delete("/:id", deleteMenu);

export default router;
