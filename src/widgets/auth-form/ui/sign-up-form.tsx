"use client";

import { authApi } from "@/shared/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  email: z.string().min(5).email("Введите корректный email"),
  firstName: z.string().min(2, "Имя должно быть длиннее 2 символов"),
  surname: z.string().min(2, "Фамилия должна быть длиннее 2 символов"),
  patronymic: z.string().optional(),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Введите корректный номер телефона"),
});

type SignUpFormInputs = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const { handleSubmit, register, formState, ...form } =
    useForm<SignUpFormInputs>({
      resolver: zodResolver(signUpSchema),
    });
  const formValues = useWatch(form);
  const { errors } = formState;

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div>
            <input
              className="text-gray-800 p-2"
              placeholder="email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              className="text-gray-800 p-2"
              placeholder="Имя"
              type="text"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <input
              className="text-gray-800 p-2"
              placeholder="Фамилия"
              type="text"
              {...register("surname")}
            />
            {errors.surname && (
              <p className="text-red-500">{errors.surname.message}</p>
            )}
          </div>

          <div>
            <input
              className="text-gray-800 p-2"
              placeholder="Отчество"
              type="text"
              {...register("patronymic")}
            />
          </div>

          <div>
            <input
              className="text-gray-800 p-2"
              placeholder="Телефон"
              type="tel"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <button type="submit" className="bg-yellow-900">
            Отправить
          </button>
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
