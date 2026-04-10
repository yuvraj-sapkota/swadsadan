import * as cartService from "./cart.service.js";

export const addItem = async (req, res) => {
  try {
    const cart = await cartService.addToCart(req.user.id, req.body);

    res.json({ success: true, message: "Item added to cart", data: cart });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMyCart = async (req, res) => {
  const cart = await cartService.getCart(req.user.id);
  res.json({ success: true, message: "mero cartt", data: cart });
};

export const removeItem = async (req, res) => {
  const cart = await cartService.removeItem(
    req.user.id,
    req.params.itemId
  );
  res.json({ success: true, message: "Item removed from cart", data: cart });
};

export const clearMyCart = async (req, res) => {
  await cartService.clearCart(req.user.id);
  res.json({ success: true, message: "Cart cleared" });
};