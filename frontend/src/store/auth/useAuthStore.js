import { create } from "zustand";
import { loginUser, registerUser } from "../../services/auth/authApi";
import { LogOut } from "lucide-react";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  saveAuth: (user, token) => {
    set({ user, token });
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  },
  login: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await loginUser(data);
      if (res.success) {
        useAuthStore.getState().saveAuth(res.user, res.token);
      }
      return res;
    } catch (err) {
      const message = err.response?.data?.message;
      throw message;
    } finally {
      set({ loading: false });
    }
  },

  register: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await registerUser(data);
      if (res.success) {
        useAuthStore.getState().saveAuth(res.user, res.token);
      }
      return res;
    } catch (err) {
      const message = err.response?.data?.message;
      throw message;
    } finally {
      set({ loading: false });
    }
  },

  logOut: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
}));
