import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonLinkProps = LinkProps &
	ButtonOwnLinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type ButtonOwnLinkProps = Partial<{
	icon?: boolean;
	className: string;
	size?: 'sm' | 'md' | 'xsm';
	children: React.ReactNode;
	variant?: 'outline' | 'underline' | 'primary' | 'blue';
}>;

export const ButtonLink = (props: ButtonLinkProps) => {
	const {
		variant = 'primary',
		children,
		icon = false,
		size = 'md',
		...restProps
	} = props;

	const cn = twMerge(
		variant === 'primary' &&
			'bg-red-60 hover:scale-105 focus:scale-105 active:scale-105',
		variant === 'blue' &&
			'border-blue-20 bg-blue-20 text-grey-80 hover:bg-transparent hover:text-blue-20 active:bg-transparent active:text-blue-20 focus:bg-transparent focus:text-blue-20',
		variant === 'outline' &&
			'border-blue-20 text-blue-20 hover:bg-blue-20 hover:text-grey-80 active:bg-blue-20 active:text-grey-80 focus:bg-blue-20 focus:text-grey-80',
		variant === 'underline' &&
			'text-blue-20 underline hover:text-blue-70 active:text-blue-70 focus:text-blue-70',
		size === 'md' &&
			'text-[36px] px-[30px] py-[25px] lg:text-[28px] lg:px-[15px] lg:py-[20px] md:text-[22px] md:py-[15px]',
		size === 'sm' && 'px-[30px] py-[10px] text-2xl',
		size === 'xsm' && 'py-2 px-3 text-sm w-fit'
	);

	const textCn = twMerge(icon && 'mr-[50px] lg:mr-0');

	return (
		<Link
			className={twMerge(
				'font-intro border-2 border-solid leading-[1] rounded-full transition-all flex items-center justify-center gap-[10px] relative w-full group',
				cn
			)}
			{...restProps}
		>
			<span className={textCn}>{children}</span>
			{icon && (
				<Image
					alt=''
					width={88}
					height={2}
					className='absolute right-16 top-1/2 -translate-y-1/2 transition-all group-hover:right-14 lg:hidden'
					src='/icons/link-arrow.svg'
				/>
			)}
		</Link>
	);
};
