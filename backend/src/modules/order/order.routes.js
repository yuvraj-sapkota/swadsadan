import express from "express";
import * as orderController from "./order.controller.js";
import { protect, isOwner } from "../../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/confirm", protect, orderController.confirmOrder); // orderconfirm by user http://localhost:8000/api/orders/

router.patch("/:id/status", protect, isOwner, orderController.updateStatus); //change status by owner http://localhost:8000/api/orders/69d89f704c9dc86bfd61069c/status 

router.get("/", protect, orderController.getOrders);

export default router;


// {
//   "status": "preparing"
// }