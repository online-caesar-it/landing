'use client';

import { authApi } from '@/shared/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

const SignUpForm = () => {
	const { handleSubmit, register, formState, ...form } =
		useForm<SignUpFormInputs>({
			resolver: zodResolver(signUpSchema),
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
	});

	const onSubmit = () => {
		mutate();
	};

	return (
		<div className='flex flex-col items-center bg-[#33334D] px-[6.7%] pb-[3.4%] pt-[4%] w-fit rounded-[50px] mx-auto mt-[6%] font-intro'>
			<div>
				<h2 className='text-5xl text-blue-20mb-[60px]'>Регистрация</h2>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-2 w-[600px]'
				>
					<label className='flex flex-col mb-[30px]'>
						<span className='text-blue-10 mb-4'>Фамилия*</span>
						<input
							className='text-gray-800 p-2 rounded-full px-6 py-7 pb-[22px] leading-[1] text-3xl'
							placeholder='email'
							type='email'
							{...register('email')}
						/>
						{errors.email && (
							<p className='text-red-500'>{errors.email.message}</p>
						)}
					</label>

					<div>
						<input
							className='text-gray-800 p-2'
							placeholder='Имя'
							type='text'
							{...register('firstName')}
						/>
						{errors.firstName && (
							<p className='text-red-500'>{errors.firstName.message}</p>
						)}
					</div>

					<div>
						<input
							className='text-gray-800 p-2'
							placeholder='Фамилия'
							type='text'
							{...register('surname')}
						/>
						{errors.surname && (
							<p className='text-red-500'>{errors.surname.message}</p>
						)}
					</div>

					<div>
						<input
							className='text-gray-800 p-2'
							placeholder='Отчество'
							type='text'
							{...register('patronymic')}
						/>
					</div>

					<div>
						<input
							className='text-gray-800 p-2'
							placeholder='Телефон'
							type='tel'
							{...register('phone')}
						/>
						{errors.phone && (
							<p className='text-red-500'>{errors.phone.message}</p>
						)}
					</div>

					<button type='submit' className='bg-yellow-900'>
						Отправить
					</button>
				</form>

				<div className='flex flex-col gap-2'>
					<button className='bg-yellow-700'>Яндекс</button>
					<button className='bg-blue-700'>Вк</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
