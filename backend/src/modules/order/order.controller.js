import {
  createOrder ,
  getAllOrders ,
  getSingleOrder ,
  updateOrderStatus ,
} from "./order.servcie.js";

import { createOrderSchema } from "./order.validation.js";

export const create = async (req, res) => {
  try {
    // const { error } = createOrderSchema.validate(req.body);

    // if (error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: error.details[0].message,
    //   });
    // }

    const order = await createOrder (req.body);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const orders = await getAllOrders ();

    res.json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingle = async (req, res) => {
  try {
    const order = await getSingleOrder (req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      success: true,
      message: "Order fetched successfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await updateOrderStatus (
      req.params.id,
      req.body.status
    );

    res.json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};