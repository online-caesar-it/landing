import { authApi } from '@/shared/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

const signUpSchema = z.object({
	email: z.string().min(5).email('Введите корректный email'),
	firstName: z.string().min(2, 'Имя должно быть длиннее 2 символов'),
	surname: z.string().min(2, 'Фамилия должна быть длиннее 2 символов'),
	patronymic: z.string().optional(),
	phone: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, 'Введите корректный номер телефона'),
});

type SignUpFormInputs = z.infer<typeof signUpSchema>;

type TMessage = {
	title: string;
	subTitle: string;
};

export const useSignUp = () => {
	const [message, setMessage] = useState<TMessage>({
		title: '',
		subTitle: '',
	});

	const { handleSubmit, register, formState, ...form } =
		useForm<SignUpFormInputs>({
			resolver: zodResolver(signUpSchema),
			mode: 'onBlur',
		});
	const formValues = useWatch(form);
	const { errors } = formState;

	const { mutate } = useMutation({
		mutationKey: ['sign-up-by-email'],
		mutationFn: () =>
			authApi.registerByEmail({
				...formValues,
				role: 'student',
			}),
		onSuccess: () => {
			setMessage({
				title: 'Пожалуйста, проверьте почту',
				subTitle:
					'На указанную электронную почту было отправлено с ссылкой на подтверждение регистрации.',
			});
		},
		onError: () => {
			setMessage({
				title: 'Ошибка при регистрации',
				subTitle: 'Кажется пошло что-то не так! Попробуйте повторить позже.',
			});
		},
	});

	const onSubmit = () => {
		mutate();
	};

	return { onSubmit, errors, handleSubmit, register, message };
};
