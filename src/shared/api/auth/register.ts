import { TAuthType } from "@/shared/types/auth-type";
import { api } from "../api";

export const register = async (data: TAuthType) => {
  const response = await api.post("/auth/register", data);
  return response;
};
