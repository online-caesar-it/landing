import { useMutation } from "@tanstack/react-query";
import AuthForm from "./auth-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await signIn("credentials", {
        ...data,
        role: "schedule1",
        redirect: false,
      });
      console.log(response);
      if (response?.ok) {
        return response.data;
      }
    },
    onError: (error) => {
      // console.error(
      //   "Registration error:",
      //   error.response?.data || error.message
      // );
      // alert(
      //   "Error during registration: " +
      //     (error.response?.data?.message || error.message)
      // );
      console.log(error);
    },
    onSuccess: async (data) => {
      console.log(data);

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
