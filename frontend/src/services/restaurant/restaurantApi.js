import apiClient from "../api/apiClient";

//http://localhost:6000/api/restaurants
export const registerRestaurant = async (data) => {
  console.log("req data -", data);
  const res = await apiClient.post("/restaurants", data);
  return res.data;
};

export const getRestaurantById = async (restaurantId) => {
  const res = await apiClient.get(`restaurants/${restaurantId}`);
  return res.data;
};

export const editRestaurant = async (restaurantId, data) => {
  console.log(restaurantId, data);
  const res = await apiClient.put(`restaurants/${restaurantId}`, data);

  return res.data;
};
