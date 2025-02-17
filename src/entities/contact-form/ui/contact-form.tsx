'use client';

import { Button, FormStatus, Separator } from '@/shared/ui';
import { useContactForm } from '../model';
import { CustomInput } from '@/entities/custom-input/ui';
import { CustomCheckbox } from '@/entities/custom-checkbox/ui';

type ContactFormProps = {
	variant?: 'white' | 'red';
};

export const ContactForm = ({ variant = 'red' }: ContactFormProps) => {
	const {
		register,
		isLoaded,
		submitter,
		isSuccess,
		handleSubmit,
		formState: { errors },
	} = useContactForm();

	return (
		<form onSubmit={handleSubmit(submitter)} className='relative w-full'>
			<FormStatus isSuccess={isSuccess} isLoaded={isLoaded} />
			<CustomInput
				type='text'
				inputName='name'
				placeholder='ФИО'
				errors={errors}
				register={register}
				variant={variant}
			/>
			<Separator offset={40} className='lg:!pb-5' />
			<CustomInput
				type='text'
				inputName='phone'
				errors={errors}
				placeholder='НОМЕР ТЕЛЕФОНА'
				register={register}
				variant={variant}
			/>
			<Separator offset={40} className='lg:!pb-5' />
			<CustomInput
				type='email'
				inputName='email'
				errors={errors}
				placeholder='ЭЛ. ПОЧТА'
				register={register}
				variant={variant}
			/>
			<Separator offset={55} className='lg:!pb-6' />
			<CustomCheckbox
				name='agreement'
				label='ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ*'
			/>
			<Separator offset={45} className='lg:!pb-5' />
			<Button
				size='xl'
				type='submit'
				variant='secondary'
				className={`w-full lg:!pt-[12px] lg:!pb-[8px] md:!py-2 ${
					variant === 'white' && 'text-red-30 hover:text-grey-90'
				}`}
			>
				Отправить
			</Button>
		</form>
	);
};
