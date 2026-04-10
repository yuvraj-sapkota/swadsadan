import { create } from "zustand";
import {
  addItemTOCartService,
  fetchCartService,
  removeCartItemService,
  updateCartItemQtyService,
} from "../../services/cart/cartService";

export const useCartStore = create((set, get) => ({
  cart: [],
  loading: false,
  error: null,

  fetchCart: async () => {
    try {
      set({ loading: true });
      const data = await fetchCartService();
      set({ cart: data.items, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addToCart: async (menu) => {
    try {
      const data = await addItemTOCartService(menu._id);
      set({ cart: data.item });
    } catch (err) {
      console.log(err);
    }
  },

  updateQty: async (id, type) => {
    try {
      const data = await updateCartItemQtyService(id, type);
      set({ cart: data.items });
    } catch (err) {
      console.log(err);
    }
  },

  removeItem: async (id) => {
    try {
      const data = await removeCartItemService(id);
      set({ cart: data.items });
    } catch (error) {
      console.log(err);
    }
  },

  getCartSummary: () => {
    const { cart } = get();
    return cart.reduce(
      (acc, item) => {
        acc.totalQty += item.qty;
        acc.totalPrice += item.qty * item.price;
        return acc;
      },
      { totalQty: 0, totalPrice: 0 },
    );
  },
}));
