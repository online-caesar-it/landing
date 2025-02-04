import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
	children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			{...rest}
			className={twMerge(
				'bg-blue-10 rounded-full flex items-center border-2 border-blue-10 justify-center px-8 pb-[10px] pt-[15px] transition-all hover:bg-transparent hover:border-blue-10 hover:text-blue-10',
				rest.className
			)}
		>
			<span
				className={
					'text-button-primary text-2xl font-normal uppercase font-intro leading-[1]'
				}
			>
				{children}
			</span>
		</button>
	);
};

export default Button;
