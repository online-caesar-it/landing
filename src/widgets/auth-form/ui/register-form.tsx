import { useMutation } from "@tanstack/react-query";
import AuthForm from "./auth-form";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";
import { register } from "@/shared/api/auth/register";

const RegisterForm = () => {
  const mutation = useMutation({
    mutationFn: async (data: {
      email: string | null;
      password: string | null;
    }) => {
      try {
        const response = await register(data);
        return response.data;
      } catch (error) {
        return error;
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      alert(
        "Error during registration: " +
          (error.response?.data?.message || error.message)
      );
    },
    onSuccess: async (data) => {
      await signIn("credentials", data);
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm submit={onSubmit} />
      <button onClick={() => signIn("yandex")}>yandex</button>
      <button onClick={() => signIn("vk", { redirect: false })}>vk</button>
    </div>
  );
};

export default RegisterForm;
