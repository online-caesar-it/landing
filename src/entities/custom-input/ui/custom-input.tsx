import { TContactFormFields } from '@/entities/contact-form/model';
import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

type CustomLabelProps = {
	inputName: keyof TContactFormFields;
	errors?: FieldErrors<TContactFormFields>;
	register: UseFormRegister<TContactFormFields>;
};

type UnionType = CustomInputProps & CustomLabelProps;

export const CustomInput = (props: UnionType) => {
	const { inputName, className, errors, register, ...otherProps } = props;

	return (
		<>
			<label htmlFor={inputName} className='block w-full mb-[40px]'>
				<input
					{...register(inputName)}
					className={twMerge(
						'p-[35px] pb-[26px] w-full rounded-full bg-red-65 border-none !text-section-sm text-red-95 font-intro leading-[1.1] placeholder:font-intro placeholder:text-section-sm placeholder:text-red-95',
						className
					)}
					{...otherProps}
				/>
			</label>
			{inputName && errors?.[inputName] && (
				<p className='text-red-500 -mt-8 ml-8 text-2xl mb-4'>
					{errors[inputName]?.message as string}
				</p>
			)}
		</>
	);
};
