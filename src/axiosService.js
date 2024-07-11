import axios from "axios";
import { decryptToken } from "@/utils/encryption";

const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

axiosAuth.interceptors.request.use((config) => {
  const encryptedToken = localStorage.getItem("authToken");
  if (encryptedToken) {
    const token = decryptToken(encryptedToken);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, redirect to login");
      localStorage.removeItem("authToken");
      // Handle redirect to login or show an error message
    }
    return Promise.reject(error);
  }
);

export { axiosAuth };
