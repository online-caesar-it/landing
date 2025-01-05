import { api } from "./api";

export type SignUpByEmail = {
  email?: string;
  firstName?: string;
  surname?: string;
  patronymic?: string;
  phone?: string;
};
export type UserPromiseType = {
  accessToken: string;
  message: string;
  user: UserType;
};
export type UserType = {
  avatar: string;
  role: string;
  firstName: string;
  id: string;
  surname: string;
  patronymic: string;
};
const registerByEmail = async (data: SignUpByEmail) => {
  return await api.post("/auth/sign-up/by-email", data);
};
const registerByYandex = async () => {
  return await api.post("/auth/sign-up/by-yandex");
};
const registerByVk = async () => {
  return await api.post("/auth/sign-up/by-vk");
};
const verifySignUp = async (
  token: string | null
): Promise<{ data: UserPromiseType }> => {
  return await api.post("/auth/sign-up/verify", {
    token,
  });
};
const loginByEmail = async ({ email }: { email?: string }) => {
  console.log(email);
  return await api.post("/auth/sign-in/by-email", {
    email,
  });
};
const verifySignIn = async (
  token: string | null
): Promise<{ data: UserPromiseType }> => {
  return await api.post("/auth/sign-in/verify", {
    token,
  });
};
export const authApi = {
  registerByEmail,
  registerByYandex,
  registerByVk,
  verifySignUp,
  loginByEmail,
  verifySignIn,
};
