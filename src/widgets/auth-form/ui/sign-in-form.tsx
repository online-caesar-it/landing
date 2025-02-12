import Link from 'next/link';
import { useSignIn } from '../hooks';
import { AuthSocials, Button, FormSnackbar, Separator } from '@/shared/ui';
import { CustomInput } from '@/entities/custom-input/ui';
import { SpeakerIcon } from '@/shared/ui/icons';

const SignInForm = () => {
	const { errors, handleSubmit, onSubmit, form, message } = useSignIn();

	return (
		<div className='mt-[6%]'>
			{message.title && (
				<FormSnackbar
					title={message.title}
					subTitle={message.subTitle}
					icon={
						<SpeakerIcon classNames='min-w-[56px] min-h-[42px] md:min-w-[28px] md:min-h-[21px]' />
					}
				/>
			)}
			<div className='flex flex-col items-center bg-[#33334D] px-[6.7%] pb-[3.4%] pt-[4%] w-1/2 rounded-[50px] mx-auto min-w-[700px] md:min-w-0 md:mx-0 md:w-full md:bg-transparent md:px-[30px] xsm:px-[15px]'>
				<h2 className='block w-fit text-5xl text-blue-20 mb-[60px] mx-auto font-intro'>
					Вход
				</h2>
				<form
					className={'d-flex flex-col gap-2 w-full'}
					onSubmit={handleSubmit(onSubmit)}
				>
					<CustomInput
						required
						formSize='md'
						variant='blue'
						label='Электронная почта'
						errors={errors}
						inputName='email'
						placeholder='Эл. Почта'
						register={form.register}
					/>
					<Separator className='mb-[70px]' />
					<Button
						type='submit'
						className='bg-yellow-900 !text-4xl !py-[14px] w-full lg:!text-xl'
						size='md'
					>
						Войти
					</Button>
					<Separator className='mb-[55px]' />
					<div>
						<AuthSocials />
						<Separator className='mb-[20px]' />
						<div className='text-[#8F97C7] text-4xl font-intro md:text-xl'>
							Нет аккаунта?{' '}
							<Link className='text-[#B5B8F8] underline' href='/auth/sign-in'>
								Зарегистрироваться
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignInForm;
