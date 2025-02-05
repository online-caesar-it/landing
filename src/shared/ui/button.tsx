import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'md' | 'sm' | 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
	const { children, variant = 'primary', size = 'md', ...rest } = props;

	const cnVariants = clsx({
		' bg-blue-10 border-blue-10 hover:bg-transparent hover:text-blue-10 text-grey-85':
			variant === 'primary',
		'bg-transparent border-[#D9D9D9] text-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-grey-85':
			variant === 'outline',
	});

	const cnSizes = clsx({
		'border-2 px-6 pb-[5px] pt-[10px]': size === 'sm',
		'border-2 px-8 pb-[4px] pt-[10px] text-2xl': size === 'md',
		'border-4 px-12 pb-[8px] pt-[14px] text-5xl': size === 'lg',
	});

	return (
		<button
			{...rest}
			className={twMerge(
				'rounded-full font-normal text-button-primary  uppercase font-intro leading-[1] flex items-center justify-center transition-all border-2 border-grey-30 bg-grey-30 text-red-65 hover:bg-transparent',
				rest.className,
				cnVariants,
				cnSizes
			)}
		>
			{children}
		</button>
	);
};
