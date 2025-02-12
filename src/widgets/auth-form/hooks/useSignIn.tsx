'use client';

import { authApi } from '@/shared/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

const signInSchema = z.object({
	email: z.string().min(5).email('Введите корректный email'),
});
type SignInFormInputs = z.infer<typeof signInSchema>;
type TMessage = {
	title: string;
	subTitle: string;
};

export const useSignIn = () => {
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
		onSuccess: () => {},
		onError: () => {
			setMessage({
				title: 'Ошибка при входе',
				subTitle: 'Проверьте правильность почты или попробуйте позже',
			});

			setTimeout(() => {
				setMessage({
					title: '',
					subTitle: '',
				});
			}, 5000);
		},
	});

	const onSubmit = () => {
		mutate();
	};

	return { onSubmit, errors, handleSubmit, form, message };
};
