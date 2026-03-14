import express from "express";
import * as controller from "./category.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), controller.create); // http://localhost:8000/api/categories/
router.get("/", controller.getAll);                          //http://localhost:8000/api/categories/
router.get("/:id", controller.getOne);
router.put("/:id", upload.single("image"), controller.update);  //http://localhost:8000/api/categories/:id
router.delete("/:id", controller.remove);                      //http://localhost:8000/api/categories/:id

export default router;