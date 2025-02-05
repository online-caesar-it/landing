'use client';

import { CustomInput } from '@/entities/custom-input/ui';
import { useContactForm } from '../model';
import { Button } from '@/shared/ui';
import { CustomCheckbox } from '@/entities/custom-checkbox/ui';

export const ContactForm = () => {
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
			/>
			<CustomInput
				type='text'
				inputName='phone'
				errors={errors}
				placeholder='НОМЕР ТЕЛЕФОНА'
				register={register}
			/>
			<CustomInput
				type='email'
				inputName='email'
				errors={errors}
				placeholder='ЭЛ. ПОЧТА'
				register={register}
			/>
			<CustomCheckbox
				name='agreement'
				label='ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ*'
			/>
			<Button className='w-full' variant='secondary' size='lg' type='submit'>
				Отправить
			</Button>
		</form>
	);
};
