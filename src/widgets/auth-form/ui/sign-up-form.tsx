'use client';

import { authApi } from '@/shared/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomInput } from '@/entities/custom-input/ui';
import { Button, Separator } from '@/shared/ui';
import { CustomCheckbox } from '@/entities';

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
				<h2 className='block w-fit text-5xl text-blue-20 mb-[60px] mx-auto'>
					Регистрация
				</h2>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col w-[600px]'
				>
					<CustomInput
						required
						formSize='md'
						variant='blue'
						label='Фамилия'
						errors={errors}
						inputName='surname'
						placeholder='Фамилия'
						register={register}
					/>
					<Separator offset={30} />
					<CustomInput
						required
						formSize='md'
						variant='blue'
						label='Имя'
						errors={errors}
						inputName='firstName'
						placeholder='Имя'
						register={register}
					/>
					<Separator offset={30} />
					<CustomInput
						required
						type='email'
						formSize='md'
						variant='blue'
						label='Отчество'
						errors={errors}
						inputName='patronymic'
						placeholder='Отчество'
						register={register}
					/>
					<Separator offset={30} />
					<CustomInput
						required
						type='email'
						formSize='md'
						variant='blue'
						label='Электронная почта'
						errors={errors}
						inputName='email'
						placeholder='email'
						register={register}
					/>
					<Separator offset={30} />
					<CustomInput
						required
						type='phone'
						formSize='md'
						variant='blue'
						label='Электронная почта'
						errors={errors}
						inputName='phone'
						placeholder='Телефон'
						register={register}
					/>

					<Separator className='mb-[34px]' />

					<div className='mx-auto'>
						<CustomCheckbox
							variant='blue'
							name='agreement'
							label='ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ*'
						/>
					</div>

					<Button type='submit' className='bg-yellow-900' size='md'>
						Зарегистрироваться
					</Button>
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
