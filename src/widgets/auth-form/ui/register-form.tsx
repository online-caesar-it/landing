import { useMutation } from "@tanstack/react-query";
import AuthForm from "./auth-form";
import { api } from "@/shared/api/api";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await api.post("/auth/register", {
        ...data,
        role: "schedule",
      });

      return response.data;
    },
    onError: (error: any) => {
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
      console.log(data);
      await signIn("credentials", {
        ...data,
        user: data.user,
        userConfig: data.userConfig,
        role: "schedule1",
        redirect: false,
      });
      router.push("/profile");
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
