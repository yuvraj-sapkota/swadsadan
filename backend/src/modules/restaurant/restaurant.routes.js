import express from "express";
import {
  create,
  getAll,
  getOne,
  update,
  remove
} from "./restaurant.controller.js";
import {protect} from "../../middlewares/authMiddleware.js"



const router = express.Router();

router.post("/", protect, create);  //http://localhost:6000/api/restaurants
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;