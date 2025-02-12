import { authApi } from '@/shared/api/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
const signInSchema = z.object({
	email: z.string().min(5).email('Введите корректный email'),
});
type SignInFormInputs = z.infer<typeof signInSchema>;
const SignInForm = () => {
	const { handleSubmit, ...form } = useForm<SignInFormInputs>({
		resolver: zodResolver(signInSchema),
	});
	const formValues = useWatch(form);
	const { errors } = form.formState;
	const { mutate } = useMutation({
		mutationKey: ['sign-in-by-email'],
		mutationFn: () => authApi.loginByEmail(formValues),
	});

	const onSubmit = () => {
		mutate();
	};
	return (
		<div className='mt-[6%]'>
			<div className='flex flex-col items-center bg-[#33334D] px-[6.7%] pb-[3.4%] pt-[4%] w-fit rounded-[50px] mx-auto md:mx-0 md:w-full md:bg-transparent md:px-[30px] xsm:px-[15px]'>
				sign in
				<form
					className={'d-flex flex-col gap-2'}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className='text-gray-800 p-2'
						placeholder='email'
						type='email'
						{...form.register('email')}
					/>
					{errors.email && (
						<p className='text-red-500'>{errors.email.message}</p>
					)}
					<button>Отправить</button>
				</form>
			</div>
		</div>
	);
};

export default SignInForm;
