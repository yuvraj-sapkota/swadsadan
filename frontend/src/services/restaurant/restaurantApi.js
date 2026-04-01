import apiClient from "../api/apiClient";

//http://localhost:6000/api/restaurants
export const registerRestaurant = async (data) => {
  console.log("req data -",data);
  const res = await apiClient.post("/restaurants", data);
  return res.data;
};
