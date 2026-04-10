import express from "express";
import * as cartController from "./cart.controller.js";
import { protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, cartController.addItem); //http://localhost:8000/api/add-to-cart/ 
router.get("/", protect, cartController.getMyCart);
router.delete("/item/:itemId", protect, cartController.removeItem);
router.delete("/", protect, cartController.clearMyCart);

export default router;

// {
//   "tableNumber": 5,
//   "menu": "69d26b409f3f74016b016701",
//   "quantity": 2,
//   "selectedOptions": [
//     {
//       "groupName": "Size",
//       "optionName": "Medium",
//       "price": 100
//     },
//     {
//       "groupName": "Extra Cheese",
//       "optionName": "Yes",
//       "price": 50
//     }
//   ]
// }