import Cart from "./cart.model.js";
import Menu from "../menu/menu.model.js";

// add item
export const addToCart = async (userId, data) => {
  const menu = await Menu.findById(data.menu);

  if (!menu) throw new Error("Menu not found");

  let cart = await Cart.findOne({ user: userId });

  // create cart
  if (!cart) {
    cart = await Cart.create({
      user: userId,
      tableNumber: data.tableNumber,
      restaurant: menu.hotel,
      items: [], 
    });
  }

  // prevent multi restaurant
  if (cart.restaurant.toString() !== menu.hotel.toString()) {
    throw new Error("Only one restaurant allowed per cart");
  }

  // check same item → update quantity
  const existingItem = cart.items.find(
    (i) =>
      i.menu.toString() === data.menu &&
      JSON.stringify(i.selectedOptions) ===
        JSON.stringify(data.selectedOptions)
  );

  if (existingItem) {
    existingItem.quantity += data.quantity;
  } else {
    cart.items.push({
      menu: data.menu,
      quantity: data.quantity,
      selectedOptions: data.selectedOptions,
    });
  }

  await cart.save();
  return cart;
};

// get cart
export const getCart = async (userId) => {
  return await Cart.findOne({ user: userId })
    .populate("items.menu")
    .populate("restaurant");
};

// remove item
export const removeItem = async (userId, itemId) => {
  const cart = await Cart.findOne({ user: userId });

  cart.items = cart.items.filter(
    (item) => item._id.toString() !== itemId
  );

  await cart.save();
  return cart;
};

// clear cart
export const clearCart = async (userId) => {
  return await Cart.findOneAndDelete({ user: userId });
};