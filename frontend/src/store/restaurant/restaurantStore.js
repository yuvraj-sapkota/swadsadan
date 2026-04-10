import { create } from "zustand";
import {
  editRestaurant,
  getRestaurantById,
} from "../../services/restaurant/restaurantApi";

export const useRestaurantStore = create((set) => ({
  restaurant: JSON.parse(localStorage.getItem("restaurant")) || null,
  loading: false,
  error: null,

  setRestaurant: (restaurant) => {
    set({ restaurant });
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
  },

  loadRestaurant: async (restaurantId) => {
    console.log(restaurantId);
    try {
      set({ loading: true, error: null });
      const res = await getRestaurantById(restaurantId);
      console.log("res for real", res);
      set({ restaurant: res.restaurant });
      localStorage.setItem("restaurant", JSON.stringify(res.restaurant));
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  updateRestaurant: async (id, data) => {
    try {
      set({ loading: true });

      const res = await editRestaurant(id, data);

      set({ restaurant: res.restaurant });
      localStorage.setItem("restaurant", JSON.stringify(res.restaurant));
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  clearRestaurant: () => {
    set({ restaurant: null });
    localStorage.removeItem("restaurant");
  },
}));
