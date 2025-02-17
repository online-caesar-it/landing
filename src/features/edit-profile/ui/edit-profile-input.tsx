import { EditIcon } from '@/shared/ui/icons';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TEditProfileInputProps = {
	inputIcon: React.ReactNode;
	inputName: string;
} & TStandartInputProps;

type TStandartInputProps = InputHTMLAttributes<HTMLInputElement>;

export const EditProfileInput = (props: TEditProfileInputProps) => {
	const { inputIcon, inputName, defaultValue, ...restProps } = props;

	return (
		<label htmlFor={inputName} className='relative'>
			<div className='absolute top-[6px] -left-[26px]'>{inputIcon}</div>
			<div className=''>
				<input
					className={twMerge(
						'text-blue-20 text-3xl max-w-[170px] font-intro leading-[1] mb-[10px] bg-transparent outline-none border-b border-solid border-grey-55'
					)}
					defaultValue={defaultValue}
					id={inputName}
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
