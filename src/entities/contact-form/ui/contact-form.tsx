'use client';

import { Button } from '@/shared/ui';
import { useContactForm } from '../model';
import { CustomInput } from '@/entities/custom-input/ui';
import { CustomCheckbox } from '@/entities/custom-checkbox/ui';

type ContactFormProps = {
	variant?: 'white' | 'red';
};

export const ContactForm = ({ variant = 'red' }: ContactFormProps) => {
	const {
		register,
		submitter,
		handleSubmit,
		formState: { errors },
	} = useContactForm();

	return (
		<form onSubmit={handleSubmit(submitter)} className='w-full'>
			<CustomInput
				type='text'
				inputName='name'
				placeholder='ФИО'
				errors={errors}
				register={register}
				variant={variant}
			/>
			<CustomInput
				type='text'
				inputName='phone'
				errors={errors}
				placeholder='НОМЕР ТЕЛЕФОНА'
				register={register}
				variant={variant}
			/>
			<CustomInput
				type='email'
				inputName='email'
				errors={errors}
				placeholder='ЭЛ. ПОЧТА'
				register={register}
				variant={variant}
			/>
			<CustomCheckbox
				name='agreement'
				label='ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ*'
			/>
			<Button
				className={`w-full ${
					variant === 'white' && 'text-red-30 hover:text-grey-90'
				}`}
				variant='secondary'
				size='lg'
				type='submit'
			>
				Отправить
			</Button>
		</form>
	);
};
