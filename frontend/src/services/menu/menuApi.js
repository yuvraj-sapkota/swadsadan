import apiClient from "../api/apiClient";

// export const addMenu = ()=>{

// }

export const getMenu = (params) => {
  return apiClient.get("/menus", { params });
};
   