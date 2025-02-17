import {
	Path,
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

type CustomLabelProps<T extends FieldValues> = {
	inputName: Path<T>;
	errors?: FieldErrors<T>;
	register: UseFormRegister<T>;
	variant?: 'white' | 'red' | 'blue';
	label?: string;
	formSize?: 'md' | 'lg' | 'sm';
};

type UnionType<T extends FieldValues> = CustomInputProps & CustomLabelProps<T>;

export const CustomInput = <T extends FieldValues>(props: UnionType<T>) => {
	const {
		label,
		errors,
		register,
		className,
		inputName,
		variant = 'red',
		formSize = 'lg',
		...otherProps
	} = props;

	const cn = twMerge(
		variant === 'red' &&
			'bg-red-65 text-grey-30 placeholder:text-red-95 focus:outline-purple-80 active:outline-purple-80',
		variant === 'white' &&
			'bg-red-30 text-grey-90 placeholder:text-[#B08585] focus:outline-purple-80 active:outline-purple-80',
		variant === 'blue' &&
			'bg-blue-45 text-grey-85 placeholder:text-grey-20 focus:outline-purple-80 active:outline-purple-80',
		formSize === 'md' &&
			'p-2 rounded-full px-6 py-7 pb-[22px] !leading-[1] text-3xl md:px-5',
		formSize === 'lg' &&
			'text-5xl leading-[1] lg:text-3xl lg:py-6 md:px-5 md:py-4 md:text-xl'
	);

	const errorCn = twMerge(
		variant === 'red' && 'text-red-500',
		variant === 'white' && 'text-red-700',
		formSize === 'md' && ''
	);

	const fieldError = errors?.[inputName as keyof FieldErrors<T>];

	return (
		<>
			<label htmlFor={inputName} className='block w-full'>
				{otherProps.required ? (
					<div className='text-blue-10 block mb-[10px] font-intro lg:mb-2'>
						<span>{label}</span>
						<span className='text-red-80'>*</span>
					</div>
				) : (
					label
				)}
				<input
					{...register(inputName)}
					className={twMerge(
						className,
						'p-[35px] pb-[26px] w-full rounded-full border-none text-section-sm  font-intro leading-[1.1] placeholder:font-intro placeholder:text-section-sm outline-none',
						cn
					)}
					{...otherProps}
				/>
			</label>
			{inputName && errors?.[inputName] && (
				<p
					className={twMerge(
						'text-red-500 ml-8 text-2xl -mb-5 font-semibold lg:ml-5 lg:text-base lg:mb-2',
						errorCn
					)}
				>
					{`${fieldError?.message}`}
				</p>
			)}
		</>
	);
};
