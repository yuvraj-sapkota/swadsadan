import express from "express";
import * as controller from "./category.controller.js";
import upload from "../../middlewares/upload.middleware.js";
import { protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), controller.create);
router.get("/", controller.getAll); //http://localhost:6000/api/categories?page=1&limit=5&search=talu
router.get("/:id", controller.getOne);
router.put("/:id", upload.single("image"), controller.update); //http://localhost:8000/api/categories/:id
router.delete("/:id", controller.remove); //http://localhost:8000/api/categories/:id

export default router;
