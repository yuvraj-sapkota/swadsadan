import apiClient from "../api/apiClient";

export const addCategory = async (categoryData) => {
  const res = await apiClient.post("/categories", categoryData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const getCategories = () => {
  return apiClient.get("/categories");
};

export const editCategories = (itemId, data) => {
  return apiClient.put(`/categories/${itemId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteOne = (itemId) => {
  return apiClient.delete(`/categories/${itemId}`);
};
