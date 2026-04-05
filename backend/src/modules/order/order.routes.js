import express from "express";
import {
  create,
  getAll,
  getSingle,
  updateOrder,
} from "./order.controller.js";

const router = express.Router();

router.post("/", create);   // http://localhost:8000/api/orders
router.get("/", getAll);
router.get("/:id", getSingle);
router.patch("/:id/status", updateOrder);

export default router;

// {
//   "tableNumber": 5,
//   "user": null,
//   "items": [
//     {
//       "menu": "69d26b409f3f74016b016701",
//       "quantity": 1,
//       "selectedOptions": [
//         {
//           "groupName": "Size",
//           "optionName": "Medium",
//           "price": 100
//         }
//       ]
//     },87
//     {
//       "menu": "69d26b339f3f74016b0166f6",
//       "quantity": 3,
//       "selectedOptions": []
//     }
//   ]
// }