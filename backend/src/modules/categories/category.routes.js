import express from "express";
import * as controller from "./category.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.put("/:id", upload.single("image"), controller.update);
router.delete("/:id", controller.remove);

export default router;