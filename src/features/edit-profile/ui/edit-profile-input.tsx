import { TEditProfileFields } from '@/shared/types/user-type';
import { EditIcon } from '@/shared/ui/icons';
import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type TEditProfileInputProps = {
	inputIcon: React.ReactNode;
	inputName: string;
	register: UseFormRegister<TEditProfileFields>;
} & TStandartInputProps;

type TStandartInputProps = InputHTMLAttributes<HTMLInputElement>;

export const EditProfileInput = (props: TEditProfileInputProps) => {
	const { inputIcon, inputName, defaultValue, register, ...restProps } = props;

	return (
		<label htmlFor={inputName} className='relative flex gap-3 md:w-full'>
			<div className=''>{inputIcon}</div>
			<div className='md:w-full'>
				<input
					className={twMerge(
						'text-blue-20 text-3xl max-w-[170px] font-intro leading-[1] mb-[10px] bg-transparent outline-none border-b border-solid border-grey-55 md:max-w-[unset] md:w-full'
					)}
					defaultValue={defaultValue}
					id={inputName}
					{...register(inputName as keyof TEditProfileFields, {
						required: 'Это поле должно быть заполнено',
					})}
					{...restProps}
				/>
				<div className='flex items-center justify-center gap-1'>
					<span>изменить</span>
					<EditIcon />
				</div>
			</div>
		</label>
	);
};
