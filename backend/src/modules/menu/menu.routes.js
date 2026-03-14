// routes/menu.routes.js
import express from "express";
import {
  createMenuController,
  getMenusController,
  getMenuByIdController,
  updateMenuController,
  deleteMenuController,
} from "./menu.controller.js";

import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createMenuController);  // http://localhost:8000/api/menus/
router.get("/", getMenusController);                        // http://localhost:8000/api/menus
router.get("/:id", getMenuByIdController);
router.put("/:id", upload.single("image"), updateMenuController); 
router.delete("/:id", deleteMenuController);

export default router;  