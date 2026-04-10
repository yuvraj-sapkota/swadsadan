import Order from "./order.model.js";
import Cart from "../cart/cart.model.js";

export const createOrderFromCart = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.menu");

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  let totalAmount = 0;

  const items = cart.items.map((item) => {
    let total = item.menu.basePrice * item.quantity;

    item.selectedOptions?.forEach((opt) => {
      total += opt.price;
    });

    totalAmount += total;

    return {
      menu: item.menu._id,
      quantity: item.quantity,
      selectedOptions: item.selectedOptions,
    };
  });

  const order = await Order.create({
    user: userId,
    tableNumber: cart.tableNumber,
    restaurant: cart.restaurant,
    items,
    totalAmount,
  });

  // clear cart
  await Cart.findOneAndDelete({ user: userId });

  return order;
};

export const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

export const getOrders = async (user) => {
  if (user.role === "owner") {
    return await Order.find()
      .populate("user")
      .populate("restaurant")
      .populate("items.menu");
  }

  return await Order.find({ user: user.id }).populate("items.menu");
};