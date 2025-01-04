"use client";

import { authApi, SignUpByEmail } from "@/shared/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";

const SignUpForm = () => {
  // TODO: add validation by zod
  const { handleSubmit, ...form } = useForm<SignUpByEmail>();
  const formValues = useWatch(form);

  const { mutate } = useMutation({
    mutationKey: ["sign-up-by-email"],
    mutationFn: () => authApi.registerByEmail(formValues),
  });

  const onSubmit = () => {
    mutate();
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2>Sign up</h2>

        <form
          {...form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <input
            className="text-gray-800 p-2"
            placeholder="email"
            type="email"
            {...form.register("email")}
          />
          <input
            className="text-gray-800 p-2"
            placeholder="Имя"
            type="text"
            {...form.register("firstName")}
          />
          <input
            className="text-gray-800 p-2"
            placeholder="Фамилия"
            type="text"
            {...form.register("surname")}
          />
          <input
            className="text-gray-800 p-2"
            placeholder="Отчество"
            type="text"
            {...form.register("patronymic")}
          />
          <input
            className="text-gray-800 p-2"
            placeholder="Телефон"
            type="phone"
            {...form.register("phone")}
          />
        </form>

        <div className="flex flex-col gap-2">
          <button className="bg-yellow-700">Яндекс</button>
          <button className="bg-blue-700">Вк</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
