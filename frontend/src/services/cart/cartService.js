import apiClient from "../api/apiClient";

export const fetchCartService = async () => {
  const res = await apiClient.get("/cart");
  return res.data;
};

export const addItemTOCartService = async (menuId) => {
  const res = await apiClient.post("/cart", {
    menuId,
    qty: 1,
  });
  return res.data;
};

export const updateCartItemQtyService = async (itemId, type) => {
  //type: "increase" | "decrease"
  const res = await apiClient.put(`/cart/${itemId}`, { type });
  return res.data;
};

export const removeCartItemService = async (itemId) => {
  const res = await apiClient.delete(`/cart/${itemId}`);
  return res;
};
