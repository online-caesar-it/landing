import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type AuthFormProps = {
  submit: (data: { email: string; password: string }) => void;
};

const AuthForm = ({ submit }: AuthFormProps) => {
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data: { email: string; password: string }) => {
    submit(data);
  });
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status]);
  return (
    <form onSubmit={onSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Email
        </label>
        <input
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.email && (
          <p style={{ color: "red", marginTop: "4px" }}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.password ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.password && (
          <p style={{ color: "red", marginTop: "4px" }}>
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
};

export default AuthForm;
