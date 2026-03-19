import apiClient from "../api/apiClient";

export const addMenu = async (data) => {
  const res = await apiClient.post("/menus", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const getMenu = (params) => {
  return apiClient.get("/menus", { params });
};

export const editMenu = async (id, data) => {
  const res = await apiClient.put(`/menus/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteMenu = async (itemId) => {
  const res = await apiClient.delete(`/menus/${itemId}`);
  return res.data;
};
