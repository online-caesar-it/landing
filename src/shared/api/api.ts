import { env } from "@/env";
import axios from "axios";
import { localStorageToken } from "../local-storage/token";

export const api = axios.create({
  baseURL: env?.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorageToken.getToken();

  if (!token) {
    return config;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
