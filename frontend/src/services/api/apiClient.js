import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.4:8000/api",
  timeout: 5000,
});

export default apiClient;
