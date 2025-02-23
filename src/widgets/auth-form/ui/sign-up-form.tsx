'use client';

import Link from 'next/link';
import { useSignUp } from '../hooks';
import { CustomCheckbox } from '@/entities';
import { SpeakerIcon } from '@/shared/ui/icons';
import { CustomInput } from '@/entities/custom-input/ui';
import { Button, FormSnackbar, Separator } from '@/shared/ui';

const SignUpForm = () => {
	const { errors, handleSubmit, onSubmit, register, message, isLoading } =
		useSignUp();

	return (
		<div className='mt-[6%]'>
			{message.title && (
				<FormSnackbar
					title={message.title}
					icon={
						<SpeakerIcon classNames='min-w-[56px] min-h-[42px] md:min-w-[28px] md:min-h-[21px]' />
					}
					subTitle={message.subTitle}
				/>
			)}
			<div className='flex flex-col items-center bg-[#33334D] px-[6.7%] pb-[3.4%] pt-[4%] w-fit rounded-[50px] mx-auto md:mx-0 md:w-full md:bg-transparent md:px-[30px] xsm:px-[15px]'>
				<div className='w-full'>
					<h2 className='block w-fit text-5xl text-blue-20 mb-[60px] mx-auto font-intro'>
						Регистрация
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-[600px] md:w-full'
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
						<Separator offset={30} className='lg:!pb-5' />
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
						<Separator offset={30} className='lg:!pb-5' />
						<CustomInput
							type='text'
							formSize='md'
							variant='blue'
							label='Отчество'
							errors={errors}
							inputName='patronymic'
							placeholder='Отчество'
							register={register}
						/>
						<Separator offset={30} className='lg:!pb-5' />
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
						<Separator offset={30} className='lg:!pb-5' />
						<CustomInput
							required
							type='phone'
							formSize='md'
							variant='blue'
							label='Номер телефона'
							errors={errors}
							inputName='phone'
							placeholder='Телефон'
							register={register}
						/>
						<Separator offset={34} className='lg:!pb-5' />
						<div className='mx-auto'>
							<CustomCheckbox
								variant='blue'
								name='agreement'
								label='ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ*'
							/>
						</div>
						<Separator className='mb-[34px]' />
						<Button
							type='submit'
							className='bg-yellow-900 !text-4xl !py-[14px] lg:!text-xl !text-[#50167B] hover:!text-blue-20 disabled:opacity-50'
							size='md'
							disabled={isLoading}
						>
							{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
						</Button>
					</form>
					<Separator className='mb-[40px]' />
					<Separator className='mb-[60px]' />
					<div className='text-[#8F97C7] text-xl font-intro'>
						Уже есть аккаунт?{' '}
						<Link className='text-[#B5B8F8] underline' href='/auth/sign-in'>
							Войти
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
