import * as orderService from "./order.service.js";

export const confirmOrder = async (req, res) => {
  try {
    const order = await orderService.createOrderFromCart(req.user.id);

    res.status(201).json({
      success: true,
      message: "Order confirmed",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateStatus = async (req, res) => {
  const order = await orderService.updateOrderStatus(
    req.params.id,
    req.body.status
  );

  res.json({ success: true, message: "Order status updated", data: order });
};

export const getOrders = async (req, res) => {
  const orders = await orderService.getOrders(req.user);

  res.json({ success: true, message: "Orders retrieved", data: orders });
};