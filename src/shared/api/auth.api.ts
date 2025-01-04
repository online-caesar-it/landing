import { api } from "./api";

export type SignUpByEmail = {
  email?: string;
  firstName?: string;
  surname?: string;
  patronymic?: string;
  phone?: string;
};

const registerByEmail = async (data: SignUpByEmail) => {
  await api.post("/auth/sign-up/by-email", data);
  await api.post("/auth/sign-up/by-yandex", data);
  await api.post("/auth/sign-up/by-vk", data);
};

export const authApi = {
  registerByEmail,
};
