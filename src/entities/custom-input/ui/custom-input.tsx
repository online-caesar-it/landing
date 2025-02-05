import { TContactFormFields } from '@/entities/contact-form/model';
import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

type CustomLabelProps = {
	inputName: keyof TContactFormFields;
	errors?: FieldErrors<TContactFormFields>;
	register: UseFormRegister<TContactFormFields>;
	variant?: 'white' | 'red';
};

type UnionType = CustomInputProps & CustomLabelProps;

export const CustomInput = (props: UnionType) => {
	const {
		errors,
		register,
		className,
		inputName,
		variant = 'red',
		...otherProps
	} = props;

	const cn = clsx({
		'bg-red-65 text-red-95 placeholder:text-red-95': variant === 'red',
		'bg-red-30 text-grey-90 placeholder:text-[#B08585]': variant === 'white',
	});

	const errorCn = clsx({
		'text-red-500': variant === 'red',
		'text-red-600': variant === 'white',
	});

	return (
		<>
			<label htmlFor={inputName} className='block w-full mb-[40px]'>
				<input
					{...register(inputName)}
					className={twMerge(
						'p-[35px] pb-[26px] w-full rounded-full border-none !text-section-sm  font-intro leading-[1.1] placeholder:font-intro placeholder:text-section-sm',
						cn,
						className
					)}
					{...otherProps}
				/>
			</label>
			{inputName && errors?.[inputName] && (
				<p
					className={twMerge('text-red-500 -mt-8 ml-8 text-2xl mb-4', errorCn)}
				>
					{errors[inputName]?.message as string}
				</p>
			)}
		</>
	);
};
