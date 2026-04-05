import Order from "./order.model.js";
import Menu from "../menu/menu.model.js";

export const createOrder = async (data) => {
  let totalAmount = 0;

  for (const item of data.items) {
    const menu = await Menu.findById(item.menu);

    if (!menu) {
      throw new Error("Menu not found");
    }

    let itemTotal = menu.basePrice;

    if (item.selectedOptions && item.selectedOptions.length > 0) {
      for (const opt of item.selectedOptions) {
        itemTotal += opt.price;
      }
    }

    itemTotal *= item.quantity;
    totalAmount += itemTotal;
  }

  const order = await Order.create({
    ...data,
    totalAmount,
  });

  return order;
};

export const getAllOrders = async () => {
  return await Order.find()
    .populate("user")
    .populate("items.menu");
};

export const getSingleOrder = async (id) => {
  return await Order.findById(id)
    .populate("user")
    .populate("items.menu");
};

export const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};