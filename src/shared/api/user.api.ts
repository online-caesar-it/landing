import { api } from "./api";

const getSelf = async () => {
  return await api.get("/user/getSelf");
};

export const userApi = { getSelf };
