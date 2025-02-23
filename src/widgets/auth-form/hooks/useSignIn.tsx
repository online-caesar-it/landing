'use client';

import { authApi } from '@/shared/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { AxiosError } from 'axios';

const signInSchema = z.object({
	email: z
		.string()
		.min(5, 'Почта должна быть более пяти символов')
		.email('Введите корректный email'),
});
type SignInFormInputs = z.infer<typeof signInSchema>;
type TMessage = {
	title: string;
	subTitle: string;
};

export const useSignIn = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<TMessage>({
		title: '',
		subTitle: '',
	});
	const { handleSubmit, ...form } = useForm<SignInFormInputs>({
		resolver: zodResolver(signInSchema),
	});
	const formValues = useWatch(form);
	const { errors } = form.formState;
	const { mutate } = useMutation({
		mutationKey: ['sign-in-by-email'],
		mutationFn: () => authApi.loginByEmail(formValues),
		onSuccess: () => {
			setLoading(false);
			setMessage({
				title: 'Проверьте вашу почту!',
				subTitle:
					'Чтобы войти, перейдите по ссылке, которую мы направили вам на почту',
			});
		},
		onError: error => {
			setLoading(false);

			const axiosError = error as AxiosError;
			const errorData = axiosError.response?.data as { message: string };

			if (errorData?.message === 'This user not exist') {
				setMessage({
					title: 'Пользователь не найден.',
					subTitle: 'Проверьте почту и попробуйте снова.',
				});
			} else {
				setMessage({
					title: 'Ошибка при входе',
					subTitle: 'Произошла ошибка. Попробуйте позже.',
				});
			}

			setTimeout(() => {
				setMessage({
					title: '',
					subTitle: '',
				});
			}, 5000);
		},
		onMutate: () => {
			setLoading(true);
		},
	});

	const onSubmit = () => {
		mutate();
	};

	return { onSubmit, errors, handleSubmit, form, message, isLoading };
};
