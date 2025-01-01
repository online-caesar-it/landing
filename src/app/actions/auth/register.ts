import { env } from "@/env";

export interface IRegisterCredentials {
  email: string;
  password: string;
}

export interface IRegisterResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export const registerUser = async (
  credentials: IRegisterCredentials
): Promise<IRegisterResponse> => {
  const API_URL = env?.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register user");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};
